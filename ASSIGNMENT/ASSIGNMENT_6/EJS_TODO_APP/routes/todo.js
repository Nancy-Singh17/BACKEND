const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

let todos = [];


router.get('/', auth, (req, res) => {
  res.render('dashboard', { todos });
});


router.post('/add', auth, (req, res) => {
  todos.push(req.body.title);
  res.redirect('/todos');
});


router.get('/delete/:index', auth, (req, res) => {
  todos.splice(req.params.index, 1);
  res.redirect('/todos');
});

module.exports = router;