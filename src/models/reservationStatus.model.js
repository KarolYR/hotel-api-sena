import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";

const ReservationStatus = sequelize.define(
  "reservationStatus",
  {
    idReservationStatus: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameStatus: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

export default ReservationStatus;
