import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";

const Product = sequelize.define("product", {
  idProduct: {
    type: DataTypes.STRING(20),
    primaryKey: true,
  },
  nameProduct: {
    type: DataTypes.STRING(20),
    unique: true,
  },
  typeProduct: {
    type: DataTypes.STRING(20),
  },
  desciptionProduct: {
    type: DataTypes.STRING(60),
  },
  priceSingleProduct: {
    type: DataTypes.INTEGER,
  },
  stock: {
    type: DataTypes.STRING,
  },
});

export default Product;
