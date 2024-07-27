export default (req, res) => {
  if (req.session.user) {
    return res.redirect("/dashboard");
  }

  res.redirect("/login");
};
