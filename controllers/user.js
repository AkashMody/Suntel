import User from '../models/user.js';

export const signUpAdmin = async ({ name, email, password }) => {
  try {
    await User.create({ name, email, password, isAdmin: true });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const loginAdmin = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    await user.checkPassword(password);
    await user.updateLoggedIn();
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};
