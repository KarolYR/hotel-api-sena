import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";

export const Task = sequelize.define("statusReservation", {
  idStatusReservation: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
});


