const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Fetch all tasks
router.get("/", todoController.getTasks);

// Add a new task
router.post("/add-task", todoController.addTask); // This will handle the form submission for adding a task

// Mark a task as completed
router.post("/tasks/:id/complete", todoController.completeTask);

// Delete a task
router.post("/tasks/:id", todoController.deleteTask);

module.exports = router;
