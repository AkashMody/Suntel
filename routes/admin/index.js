import { Router } from 'express';
import protectRoute from '../../utils/protectRoute.js';
import home from './home.js';
import login from './login.js';
import dashboard from './dashboard.js';
import logOut from './logout.js';
import signUpAdmin from './signup-admin.js';

const router = Router();

router.get('/', home);
router
  .route('/login')
  .get((req, res) => res.render('login'))
  .post(login);

router
  .route('/signup')
  .get((req, res) => res.render('signup'))
  .post(signUpAdmin);

router.get('/dashboard', protectRoute('/login'), dashboard);
router.get('/logout', logOut);

export default router;
