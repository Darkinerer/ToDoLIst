const Todo = require('../models/Todo');

class HomeController {
  async index(req, res) {
    const allTodo = await Todo.find();
    res.render('index', { todo: allTodo });
  }
}

module.exports = new HomeController();
