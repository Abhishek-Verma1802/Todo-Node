const mysql = require("mysql2/promise");
require("dotenv").config(); // Load environment variables

const config = {
  user: process.env.DB_USER,       // Database username
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME,     // Database name
  host: process.env.DB_HOST,         // Database host
};

const pool = mysql.createPool(config);

module.exports = pool;
