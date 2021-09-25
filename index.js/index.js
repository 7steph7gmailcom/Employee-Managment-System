const inquirer = require("inquirer");
const fs = require("fs");
const { init } = require("./models/Department");
const { Employee, Role, Department } = require("./models");
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
        ? viewEmp()
        : userAction === "Add employee"
        ? addEmp()
        : userAction === "Update employee role"
        ? updateEmp()
        : userAction === "View all roles"
        ? viewRole()
        : userAction === "Add role"
        ? addRole()
        : userAction === "View all departments"
        ? viewDep()
        : userAction === "Add department"
        ? addDep()
        : userAction === "I WOULD LIKE TO EXIT APPLICATION"
        ? exitApp()
        : console.log("error");
    });
};
