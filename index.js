const express = require("express");
const { json } = require("express");
const tasks = require("./controllers/todoController");
const models = require("./models/task");
const routes = require("./routes/todoRoutes");

const app = express();

app.use(json());
app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
  });