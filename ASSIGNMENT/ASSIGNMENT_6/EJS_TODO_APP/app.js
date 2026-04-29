const express = require('express');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todo');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');

app.use('/', authRoutes);
app.use('/todos', todoRoutes);


app.use((err, req, res, next) => {
  console.log(err); 
  res.send("Something went wrong");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});