import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import  UserHotel  from "./userHotel.model.js";

export const UserRol = sequelize.define("userRol", {
  idUserRol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameRol: {
    type: DataTypes.STRING,
    unique: true,
  }
}, {
  timestamps: false
});

UserRol.hasMany(UserHotel, {
  foreignKey: "idUserRol",
  sourceKey: "idUserRol"
})

UserHotel.belongsTo(UserRol, {
  foreignKey: "idUserRol",
  targetKey: "idUserRol"
})