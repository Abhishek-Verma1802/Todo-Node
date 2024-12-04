const pool = require('../config/dbConfig');

// Get all tasks from the database
const getAllTasks = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM ToDo');
        return rows; // Return the rows of tasks
    } catch (error) {
        throw new Error('Error fetching tasks');
    }
};

// Add a new task to the database
const addTask = async (task) => {
    try {
        await pool.query('INSERT INTO ToDo (task) VALUES (?)', [task]);
    } catch (error) {
        throw new Error('Error adding task');
    }
};

// Mark a task as completed
const markTaskCompleted = async (id) => {
    try {
        await pool.query('UPDATE ToDo SET isCompleted = TRUE WHERE id = ?', [id]);
    } catch (error) {
        throw new Error('Error marking task as completed');
    }
};

// Delete a task from the database
const deleteTask = async (id) => {
    try {
        await pool.query('DELETE FROM ToDo WHERE id = ?', [id]);
    } catch (error) {
        throw new Error('Error deleting task');
    }
};

module.exports = { getAllTasks, addTask, markTaskCompleted, deleteTask };
