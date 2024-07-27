import { signUpAdmin } from '../../controllers/user.js';

export default async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await signUpAdmin({ name, email, password });
    res.redirect('/login');
  } catch (error) {
    res.redirect('/signup');
  }
};
