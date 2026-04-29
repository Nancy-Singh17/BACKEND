const jwt = require('jsonwebtoken');
const SECRET = "secretkey";

module.exports = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.redirect('/login');

  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.redirect('/login');
  }
};