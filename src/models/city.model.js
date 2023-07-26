import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import  Costumer  from "./custumer.model.js";

const City = sequelize.define("city", {
  idCity: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameCity: {
    type: DataTypes.STRING(20),
    unique: true,
  },
}, {
  timestamps: false,
});

City.hasMany(Costumer, {
  foreignKey: "idCity",
  sourceKey: "idCity",
});

Costumer.belongsTo(City, {
  foreignKey: "idCity",
  targetKey: "idCity",
});

export default City;
