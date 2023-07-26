import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";

import Bill from "./bill.model.js";
import Custumer from "./custumer.model.js";
import ReservationStatus from "./reservationStatus.model.js";

const Reservation = sequelize.define("reservation", {
  idReservation: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  checkInDateReservation: {
    type: DataTypes.DATE,
  },
  checkOutDateReservation: {
    type: DataTypes.DATE,
  },
  daysReservation: {
    type: DataTypes.INTEGER,
  },
  companionReservation: {
    type: DataTypes.BOOLEAN,
  },
  reasonReservation: {
    type: DataTypes.STRING(20),
  },
});

// tiene una factura
Reservation.hasOne(Bill, {
  foreignKey: "idReservation",
  sourceKey: "idReservation",
});
Bill.belongsTo(Reservation, {
  foreignKey: "idReservation",
  targetKey: "idReservation",
});

// reserva tiene un cliente
Reservation.belongsTo(Custumer, {
  foreignKey: "idCustumer",
  targetKey: "idCustumer",
});
Custumer.hasMany(Reservation, {
  foreignKey: "idCustumer",
  targetKey: "idCustumer",
});

// reserva tiene un status
Reservation.belongsTo(ReservationStatus, {
  foreignKey: "idReservationStatus",
  targetKey: "idReservationStatus",
});
ReservationStatus.hasMany(Reservation, {
  foreignKey: "idReservationStatus",
  sourceKey: "idReservationStatus",
});

export default Reservation;
