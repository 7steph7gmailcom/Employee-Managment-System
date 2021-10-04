const inquirer = require("inquirer");
let Database = require("./config/connection");
// require('dotenv').config();

const db = new Database({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password7",
    database: "employee"
  });
  

async function getManagerNames() {
    let query = "SELECT * FROM employee manager_id";

    const rows = await db.query(query);

    let employeeNames = [];
    for(const employee of rows) {
        employeeNames.push(employee.first_name + " " + employee.last_name);
    }
    return employeeNames;
}

async function getRoles() {
  let query = "SELECT title FROM role";
  const rows = await db.query(query);
  
  let roles = [];
  for(const row of rows) {
      roles.push(row.title);
  }

  return roles;
}

async function getDepartmentNames() {
  let query = "SELECT name FROM department";
  const rows = await db.query(query);


  let departments = [];
  for(const row of rows) {
      departments.push(row.name);
  }

  return departments;
}


async function getDepartmentId(departmentName) {
  let query = "SELECT * FROM department WHERE department.name=?";
  let res = [departmentName];
  const rows = await db.query(query, res);
  return rows[0].id;
}


async function getRoleId(roleName) {
  let query = "SELECT * FROM role WHERE role.title=?";
  let res = [roleName];
  const rows = await db.query(query, res);
  return rows[0].id;
}




