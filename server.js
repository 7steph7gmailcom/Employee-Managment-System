const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    PORT: 3306,
    password: 'Password7',
    database: 'employee_db'
  },
  console.log(`Connected to the Employee DB.`)
);

// Query database
db.query('SELECT * FROM Employee DB', function (err, results) {
    console.log(results);
  });
  
  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
// async function main() {
//     // get the client
//     const mysql = require('mysql2/promise');
//     // create the connection
//     const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
//     // query database
//     const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
//   }

