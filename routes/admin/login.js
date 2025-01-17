import { loginAdmin } from '../../controllers/user.js';

export default async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await loginAdmin({ email, password });
    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      lastLoggedIn: user.lastLoggedIn,
      role: user.isAdmin ? "Admin" : "User",
    };
    return res.redirect('/dashboard');
  } catch {
    res.redirect('/login');
  }
};
