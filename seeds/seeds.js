const sequelize = require("../config/connection");
const { Department, Role, Employee } = require("../models");

const DepartmentData = require("/department.js");
const EmployeeData= require("/employee.js");
const RoleData = require("/role.js");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Department.bulkCreate(departmentData);
  await Role.bulkCreate(roleData);
  await Employee.bulkCreate(employeeData);

  process.exit(0);
};

seedDatabase();