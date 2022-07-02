require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const tasks = require("./controllers/todoController");
const mongoose = require('mongoose');
const routes = require("./routes/todoRoutes");

const app = express();
mongoose.connect(process.env.TODO_URL);

app.use(bodyParser.json());
app.use("/", routes);

mongoose.connection.once('open', () => {
  console.log("Database connected");
})
.on('error', () => {
  console.log("Error msg: ", error);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
  });