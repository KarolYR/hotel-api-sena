import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";

const Custumer = sequelize.define("custumer", {
  idCustumer: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nameCustumer: {
    type: DataTypes.STRING(40),
  },
  birthdateCustomer: {
    type: DataTypes.DATEONLY,
  },
  addressCustomer: {
    type: DataTypes.STRING(70),
  },
  emailCustomer: {
    type: DataTypes.STRING(100),
    unique: true
  },
  phoneCustomer: {
    type: DataTypes.INTEGER(100),
  },
  jobCustomer: {
    type: DataTypes.STRING(100),
  },
  companyCustomer: {
    type: DataTypes.STRING(40),
  },
});

export default Custumer;
