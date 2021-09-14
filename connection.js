const Sequelize = require("sequelize");
const mysql = require("mysql2");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Password7",
  database: "Employee_db",
});


module.exports = connection;
module.exports = sequelize;