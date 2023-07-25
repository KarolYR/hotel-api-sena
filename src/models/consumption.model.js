import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import Package from "./package.model.js";
import Product from "./product.model.js";

const Consumption = sequelize.define("consumption", {
  amount: {
    type: DataTypes.INTEGER
  }
});

Package.belongsToMany(Product, { through: Consumption });
Product.belongsToMany(Package, { through: Consumption });

export default Consumption;
