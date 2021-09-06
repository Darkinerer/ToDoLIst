const moment = require('moment');
const Todo = require('../models/Todo');

class TaskController {
  async AddTask(req, res) {
    const { todo } = req.body;
    const DateTime = moment().format('YYYY-MM-DD HH:mm');

    const NewTodo = new Todo({
      text: todo,
      date: DateTime,
      completed: false,
    });

    await NewTodo
      .save()
      .catch((err) => console.log(err));
    return res.redirect('/');
  }

  async ExecuteTask(req, res) {
    const { id } = req.params;

    const todo = await Todo.findOne({ _id: id });

    if (todo) {
      await Todo.updateOne({ _id: id }, { $set: { completed: !todo.completed } }, { upsert: true });
    }

    return res.redirect('/');
  }

  async DeleteTask(req, res) {
    const { id } = req.params;
    await Todo
      .deleteOne({ _id: id })
      .catch((err) => console.log(err));
    return res.redirect('/');
  }

  async GetTask(req, res) {
    const { id } = req.params;

    const todo = await Todo
      .findOne({ _id: id })
      .catch((error) => {
        console.log('error', error);
      });

    if (!todo) {
      return res.redirect('/');
    }

    return res.render('edit', { todo });
  }

  async EditTask(req, res) {
    const { id } = req.params;

    await Todo.updateOne(
      { _id: id },
      { $set: { text: req.body.todo } },
      { upsert: true },
    );
    return res.redirect('/');
  }
}

module.exports = new TaskController();
