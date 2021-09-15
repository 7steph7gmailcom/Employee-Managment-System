const Department = require("./Department");
const Employee = require("./Employee");
const Role = require("./Roles");

//role has one department , creating a foriegn key in the "role" table
Role.belongsTo(Department, {
  foreignKey: "department_id",
});

//create association 

Department.hasMany(Role, {
  foreignKey: "department_id",
});

//employee has one role, creating a foriegn id in the "employee" table

Employee.belongsTo(Role, {
  foreignKey: "role_id",
});

//employee has one manager 

Role.hasMany(Employee, {
  foreignKey: "role_id",
});


module.exports = { Department, Employee, Role };