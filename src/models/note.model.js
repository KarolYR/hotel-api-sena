import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";

export const Note = sequelize.define("note", {
  idNote: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titleNote: {
    type: DataTypes.STRING(20),
  },
  contentNote: {
    type: DataTypes.TEXT,
  }
});


export default Note;