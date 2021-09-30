const {prompt} = require("inquirer");
const fs = require("fs");
// const { init } = require("./models/Department");
// const { Employee, Role, Department } = require("./models");
// const cTable = require("console.table");
// const connection = require("./config/connection");
// const uuid = require("./helpers/uuid");
// const sequelize = require("./config/connection");



init()
function init() {
  console.log("initPrompt")
  initQuestions()
}

function initQuestions() {
    prompt
      ([
        {
          type: "list",
          name: "initQuestions",
          message: "What would you like to do?",
          choices: [
            "View all employees",
            "Add employee",
            "Update employee role",
            "View all roles",
            "Add role",
            "View all departments",
            "Add department",
            "I WOULD LIKE TO EXIT APPLICATION",
          ],
        },
      ])
      .then((response) => {
        const userAction = response.initQuestions;
        userAction === "View all employees"
        ? viewEmployee()

        : userAction === "Add employee"
        ? addEmployee()

        : userAction === "Update employee role"
        ? updateEmployee()

        : userAction === "View all roles"
        ? viewRole()

        : userAction === "Add role"
        ? addRole()

        : userAction === "View all departments"
        ? viewDepartment()

        : userAction === "Add department"
        ? addDepartment()

        : userAction === "I WOULD LIKE TO EXIT APPLICATION"
        ? exitApp()
        : console.log("error");
    });
};

async function viewEmployee() {
    console.log("\n EMPLOYEES\n");
    const empData = await Employee.findAll();
    const emps = JSON.stringify(empData);
  
  
    console.table(JSON.parse(emps));
    initQuestions();
  }

addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Please enter your first name",
      },
      { 
        type: "input",
        name: "lastName",
        message: "Please enter your last name",
      },
      {
        type: "list",
        name: "roleResponse",
        message: "What is your role?",
        choices: [
          "Branch Manager",
          "Regional Manager",
          "Original Asst Regional Manager",
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
        name: "managerResponse",
        message: "Who is your Manager?",
        choices: ["Ed  Truck", "Michael Scott", "Dwight K Schrute", "Jim Halpert", "Andy Bernard", "I am a Manager"],
      },
    ])
    .then((response) => {
      const role = response.roleResponse;
      const manager = response.managerResponse;
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
    : console.log("error");

    
    manager === "Ed Truck"
    ? (managerId = 1)

    : manager === "Michael Scott"
    ? (managerId = 2)

    : manager === "Dwight K Schrute"
    ? (managerId = 3)

    : manager === "Jim Halpert"
    ? (managerId = 4)

    : manager === "Andy Bernard"
    ? (managerId = 10)

    : manager === "I am a manager"
    ? (managerId = null)


