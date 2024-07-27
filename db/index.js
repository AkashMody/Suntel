import mongoose from 'mongoose';

const connectToDb = async () =>
  
  await mongoose.connect(
    `mongodb+srv://${process.env.atlasUser}:${process.env.atlasPassword}@cluster0.6yg6jah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );

export default connectToDb;
