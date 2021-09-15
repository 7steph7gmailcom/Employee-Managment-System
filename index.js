const inquirer = require("inquirer");
const fs = require("fs");
const { init } = require("./models/Department");
const { Department, Employee, Role,  } = require("./models");
const cTable = require("console.table");
const connection = require("./config/connection");
const uuid = require("./helpers/uuid");
const sequelize = require("./config/connection");


initQuestions = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "initQuestions",
          message: "What would you like to do?",
          choices: [
            "view all departments",
            "view all roles",
            "view all employees",
            "add department",
            "add employee",
            "add role",
            "update employee role",
            "EXIT APPLICATION"
          ],
        },
      ])

      .then((response) => {
        const userAction = response.initQuestions;
  
        userAction === "view all departments"
          ? addDep()  
          : userAction === "view all roles"
          ? viewRole()
          : userAction === "view all employees"
          ? viewEmp()
          : userAction === "add department"
          ? viewDep()
          : userAction === "add employee"
          ? addEmp()
          : userAction === "add role"
          ? addRole()
          : userAction === "update employee role"
          ? updateEmp()
          : userAction === "EXIT APPLICATION"
          ? exitApp()
          : console.log("error");
      });
  };


// View all Departments
  async function viewDep() {
    const depData = await Department.findAll();
    const deps = JSON.stringify(depData);
  
    console.table(JSON.parse(deps));
    initQuestions();
  }


// View all Roles
  async function viewRole() {
    console.log("\n ROLES\n");
    const rolesData = await Role.findAll();
    const roles = JSON.stringify(rolesData);
  
    console.table(JSON.parse(roles));
    initQuestions();
  }


// View all Employees
  async function viewEmp() {
    const empData = await Employee.findAll();
    const emps = JSON.stringify(empData);
  
    console.table(JSON.parse(emps));
    initQuestions();
  }


// Add Department
  addDepartment = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "departmentName",
          message: "Please enter the name of the Department",
        },
      ])
      .then((response) => {
        Department.create({
          name: response.departName,
        });
        initQuestions();
      });
  };


//   Add Employee
  addEmployee = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "firstName",
          message: "Please enter first name of employee",
        },
        {
          type: "input",
          name: "lastName",
          message: "Please enter last name of employee",
        },
        {
          type: "list",
          name: "companyRole",
          message: "What is your role?",
          choices: [
            "Branch Manager",
            "Regional Manager",
            "Asst Regional Manager",
            "Senior Accountant",
            "Customer Service Representative",
            "Receptionist",
            "Quality Assurance Representative",
            "Human Resources",
            "Regional Director in Charge of Sales",
            "Sales Representative",
          ],
        },
  
        {
          type: "list",
          name: "reportingSupervisor",
          message: "Who is your Supervisor?",
          choices: ["Branch Manager", "Regional Manager", "Original Asst Regional Manager", "Asst Regional Manager", "Regional Director in Charge of Sales"],
        },
      ])
      .then((response) => {
        const role = response.companyRole;
        const manager = response.reportingSupervisor;
        let roleId;
        let managerId;
  
        role === "Branch Manager"
          ? (roleId = 1)
          : role === "Regional Manager"
          ? (roleId = 2)
          : role === "Original Asst Regional Manager"
          ? (roleId = 3)
          : role === "Asst Regional Manager"
          ? (roleId = 4)
          : role === "Senior Accountant"
          ? (roleId = 5)
          : role === "Customer Service Representative"
          ? (roleId = 6)
          : role === "Receptionist"
          ? (roleId = 7)
          : role === "Quality Assurance Representative"
          ? (roleId = 8)
          : role === "Human Resources"
          ? (roleId = 9)
          : role === "Regional Director in Charge of Sales"
          ? (roleId = 10)
          : role === "Sales Representative"
          ? (roleId = 11)
        
  
      