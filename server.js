const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');
const sequelize = require("./config/connection")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// sequelize.sync().then(() => {
 
// })

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    PORT: 3306,
    password: 'Password7',
    database: 'Employee_db'
  },
  console.log(`Connected to the Employee_db`)
);

// Database query
db.query('SELECT * FROM Employee_db', function (err, results) {
    console.log(results);
  });
  
  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });


  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

