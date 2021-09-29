const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Role extends Model {}

const role = Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    department_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Department",
        key: "id",
      },
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Role",
  }
);
module.exports = Role;