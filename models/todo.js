const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
  text: 'string',
  date: 'string',
  completed: 'boolean',
});

module.exports = new mongoose.Model('Todo', ToDoSchema);
