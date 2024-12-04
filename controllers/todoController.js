const todoModel = require("../models/todoModel");

// Get all tasks from the database
const getTasks = async (req, res) => {
    try {
      const tasks = await todoModel.getAllTasks(); // Fetch all tasks using the model
      if (tasks.length === 0) {
        return res.render("noTasks"); // Render the "No Tasks" page if there are no tasks
      }
      res.status(200).render("index", { tasks }); // Render index if tasks are available
    } catch (error) {
      res.status(500).send("Error fetching tasks"); // Internal server error on failure
    }
  };

// Add a new task to the database
const addTask = async (req, res) => {
    try {
      const { task } = req.body; // Get the task from the form
      await todoModel.addTask(task); // Add the task using the model
      res.status(201).redirect("/"); // HTTP status 201 (Created) after adding the task, then redirect
    } catch (error) {
      res.status(500).send("Error adding task"); // Internal server error on failure
    }
  };
  

// Mark a task as completed
const completeTask = async (req, res) => {
  try {
    const { id } = req.params; // Get the task ID from the URL
    await todoModel.markTaskCompleted(id); // Mark the task as completed using the model
    res.status(200).redirect("/"); // HTTP status 200 (OK) after completing the task, then redirect
  } catch (error) {
    res.status(500).send("Error completing task"); // Internal server error on failure
  }
};

// Delete a task from the database
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params; // Get the task ID from the URL
    await todoModel.deleteTask(id); // Delete the task using the model
    res.status(200).redirect("/"); // HTTP status 200 (OK) after deleting the task, then redirect
  } catch (error) {
    res.status(500).send("Error deleting task"); // Internal server error on failure
  }
};

  
  module.exports = { getTasks, addTask, completeTask, deleteTask };
