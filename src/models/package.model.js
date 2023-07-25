import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";

import Reservation from "./reservation.model.js";

const Package = sequelize.define("package", {
  packageId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  totalXService: {
    type: DataTypes.INTEGER,
  },
  totalXproducts: {
    type: DataTypes.INTEGER,
  },
  totalPackage: {
    type: DataTypes.BIGINT,
  },
});


// package tiene muchas reservas
Package.hasMany(Reservation, {
  foreignKey: "packageId",
  sourceKey: "packageId",
  allowNull: true
});


export default Package;
