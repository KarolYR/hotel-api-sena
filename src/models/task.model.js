import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";

// TODO: no hacer por el momenento
export const Task = sequelize.define("Task", {
  idTask: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});
