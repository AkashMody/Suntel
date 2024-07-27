import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import session from 'express-session';
import compression from 'compression';
import admin from './routes/admin/index.js';
import connectToDb from './db/index.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const logFile = join(__dirname, 'suntel.log');

app.use(compression());
app.use('/assets', express.static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'public', 'client')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  '/',
  session({
    name: 'sessId',
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: app.get('env') === 'production' ? true : false,
      httpOnly: true,
      maxAge: 18000000, // 5 hours
    },
  })
);

app.set('view engine', 'pug');

app.use('/', admin);

Promise.all([connectToDb()])
  .then(() => app.listen(3000, () => console.log('App started on port 3000 with Atlas')))
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
