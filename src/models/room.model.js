import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import Package from "./package.model.js";

const Room = sequelize.define("room", {
  idRoom: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  pricePerNightRoom: {
    type: DataTypes.INTEGER,
  },
  floorRoom: {
    type: DataTypes.INTEGER,
  },
  avaibleRoom: {
    type: DataTypes.BOOLEAN,
  },
  capacityRoom: {
    type: DataTypes.INTEGER,
  },
  descriptionRoom: {
    type: DataTypes.TEXT,
  },
},{
  timestamps: false
});

// room tiene muchos packages
Room.hasMany(Package, {
  foreignKey: "idRoom",
  sourceKey: "idRoom"
})


export default Room;
