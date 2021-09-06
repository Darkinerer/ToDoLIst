const router = require('express').Router();
const taskController = require('../controllers/taskController');

router.post('/add/todo', taskController.AddTask);

router.post('/edit/todo/:id', taskController.EditTask);

router.get('/execute/:id', taskController.ExecuteTask);

router.get('/edit/todo/:id', taskController.GetTask);

router.get('/delete/todo/:id', taskController.DeleteTask);

module.exports = router;
