const express = require("express");
const path = require("path");
const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use('/', todoRoutes);

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
