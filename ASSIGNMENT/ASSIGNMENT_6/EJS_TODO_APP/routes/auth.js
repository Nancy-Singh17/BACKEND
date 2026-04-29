const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const SECRET = "secretkey";

// fake user
const USER = {
  email: "test@test.com",
  password: "1234"
};

// login page
router.get('/login', (req, res) => {
  res.render('login');
});

// login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    const token = jwt.sign({ email }, SECRET);

    res.cookie('token', token);
    return res.redirect('/todos');
  }

  res.send("Invalid credentials");
});

// logout
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
});

module.exports = router;