let allTasks = require("../models/task");

const { v4: uuidv4 } = require('uuid');


const tasks = (req, res) => {
    console.log(allTasks)
    res.send(allTasks);
}

const newTask = (req, res) => {
    const task = req.body;
    const taskWithId = {...task, id: uuidv4()}
    allTasks.push(taskWithId);
    res.send(`Task with title ${task.title} added`);
}

const updateTask = (req, res) => {
    const id = req.params.id;
    const { title, description, date } = req.body;

    const task = allTasks.find((task) => task.id === id);

    if (title) task.title = title;
    if (description) task.description = description;
    if (date) task.date = date;

    res.send(`Task with id ${id} updated`);
}

const deleteTask = (req, res) => {
    const id = req.params.id;
    allTasks = allTasks.filter((task) => task.id !== id);
    res.send(`Task with id ${id} removed`);
}


module.exports = {
    newTask,
    updateTask,
    deleteTask,
    tasks
}