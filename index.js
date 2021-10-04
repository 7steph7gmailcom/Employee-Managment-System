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


async function getEmployeeId(fullName) {
  
  let employee = getFirstAndLastName(fullName);

  let query = 'SELECT id FROM employee WHERE employee.first_name=? AND employee.last_name=?';
  let res=[employee[0], employee[1]];
  const rows = await db.query(query, res);
  return rows[0].id;
}


async function getEmployeeNames() {
  let query = "SELECT * FROM employee";

  const rows = await db.query(query);
  let employeeNames = [];
  for(const employee of rows) {
      employeeNames.push(employee.first_name + " " + employee.last_name);
  }
  return employeeNames;
}


async function viewAllRoles() {
  console.log("");
 
  let query = "SELECT * FROM role";
  const rows = await db.query(query);
  console.table(rows);
  return rows;
}


async function viewAllDepartments() {
  

  let query = "SELECT * FROM department";
  const rows = await db.query(query);
  console.table(rows);
}


async function viewAllEmployees() {
  console.log("");


  let query = "SELECT * FROM employee";
  const rows = await db.query(query);
  console.table(rows);
}


async function viewAllEmployeesByDepartment() {
   
  console.log("");
  let query = "SELECT first_name, last_name, department.name FROM ((employee INNER JOIN role ON role_id = role.id) INNER JOIN department ON department_id = department.id);";
  const rows = await db.query(query);
  console.table(rows);
}

function getFirstAndLastName( fullName ) {
  let employee = fullName.split(" ");
  if(employee.length == 2) {
      return employee;
  }

  const last_name = employee[employee.length-1];
  let first_name = " ";
  for(let i=0; i<employee.length-1; i++) {
      first_name = first_name + employee[i] + " ";
  }
  return [first_name.trim(), last_name];
}

async function updateEmployeeRole(employeeInfo) {
 
  const roleId = await getRoleId(employeeInfo.role);
  const employee = getFirstAndLastName(employeeInfo.employeeName);

  let query = 'UPDATE employee SET role_id=? WHERE employee.first_name=? AND employee.last_name=?';
  let res=[roleId, employee[0], employee[1]];
  const rows = await db.query(query, res);
  console.log(`Updated employee ${employee[0]} ${employee[1]} with role ${employeeInfo.role}`);
}