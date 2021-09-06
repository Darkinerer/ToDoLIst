const express = require('express');
const mongoose = require('mongoose');
const IndexRoute = require('./routes/index');
const ToDoRouter = require('./routes/todo');
require('dotenv').config();

const app = express();

// conenction to mongodb
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// routes
app.use(IndexRoute);
app.use(ToDoRouter);

// server configurations....
// move port to .env
app.listen(process.env.PORT, () => console.log(`Server started listening on port: ${process.env.PORT}`));
