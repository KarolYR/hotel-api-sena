// TODO FALTA BILL SERVICE

import Package from "../models/package.model.js";
import Reservation from "../models/reservation.model.js";
import { CheckService } from "./check.service";
import { RoomsService } from "./rooms.service.js";

const checkService = new CheckService();
const roomService = new RoomsService();

export class BillService {
  /**
   * @param  {bill} objeto bill
   * obligatorio que incluya la idReservation
   */
  async addBill({ bill }) {
    const { idReservation } = bill;

    // actualiza reserva a status checkOut
    const reservationFound = await Reservation.findByPk(idReservation);
    const reservationUpdated = await reservationFound
      .set({ idReservationStatus: 2 })  // 2 status checkOut
      .save();

    const packageFound = await Package.findByPk(reservationUpdated.packageId);
    const roomFound = await Room.findByPk(packageFound.idRoom);
    await roomFound.set({ idRoomStatus: 3 }).save();

  }
}
