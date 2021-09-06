// TODO: Create an array of questions for user input
const questions = [
    {
      type: "list",
      name: "Opening",
      message: "Hello, What would you like to do?",
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a roll", "Add an employee", "Update an employee role"]
    },
    {
      type: "input",
      name: "Add a department",
      message: "Please select name of department",
    },
    {
      type: "input",
      message: "Add a role",
      name: "Please select a name, salary, and department for the role that is being added to the database",
    },
    {
      type: "input",
      name: "Add employee",
      message: "employee's first name, last name, role, and manager",
    },
    {
      type: "input",
      message: "Update employee role",
      name: "update new role of employee",
    },
    
  ];