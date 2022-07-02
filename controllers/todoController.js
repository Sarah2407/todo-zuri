let Task = require("../models/task");

const tasks = async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
}

const newTask = async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
    });

    const newTask = await task.save()
    .then(`Task with title ${task.title} added`)
    .catch(error => {
        res.json({message: error})
    })

    res.send(`Task with title ${task.title} added`);
}

const updateTask = async (req, res) => {
    const updatedTask = await Task.updateOne(
        {_id: req.params.id},
        {$set: {title: req.body.title}}
    );

    res.send(updatedTask);
}

const deleteTask = async (req, res) => {
    await Task.deleteOne({_id: req.params.id});
    res.send(`One task removed`);
}


module.exports = {
    newTask,
    updateTask,
    deleteTask,
    tasks
}