import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";

const Service = sequelize.define("service", {
  idService: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameService: {
    type: DataTypes.STRING,
    unique: true,
  },
  descriptionService: {
    type: DataTypes.STRING,
  },
  precioService: {
    type: DataTypes.DECIMAL,
  },
}, {
  timestamps: false
});

export default Service;
