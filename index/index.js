const {prompt} = require("inquirer");
const fs = require("fs");
// const { init } = require("./models/Department");
const { Employee, Role, Department } = require("./models");
const cTable = require("console.table");
const connection = require("./config/connection");
const uuid = require("./helpers/uuid");
const sequelize = require("./config/connection");



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



