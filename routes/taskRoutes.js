const express = require("express");
const taskRoutes = express();
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

taskRoutes.get("/getAllTasks", getAllTasks);
taskRoutes.post("/addTask", createTask);
taskRoutes.get("/getTask/:id", getTaskById);
taskRoutes.put("/updateTask/:id", updateTask);
taskRoutes.delete("/deleteTask/:id", deleteTask);

module.exports = { taskRoutes };
