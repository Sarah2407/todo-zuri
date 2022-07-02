const express = require('express');

const router = express.Router();
const controller = require('../controllers/todoController');

router.get('', controller.tasks);
router.post('/add-task', controller.newTask);
router.patch('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);

module.exports = router;