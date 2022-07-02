const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-express');

mongoose.connection.once('open', () => {
    console.log("Database connected");
})
.on('error', () => {
    console.log("Error msg: ", error);
})

module.exports = mongoose;