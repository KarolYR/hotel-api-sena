import Reservation from "../models/reservation.model";


/**
 * servicio para usar en el servicio de bill
 * idReservationStatus: 1 proceso 2 checkInt 3 checkOunt 4 cancel
 */

export class CheckService {
  async addCheckInt({ idReservation }) {
    const reservationFound = await Reservation.findByPk(idReservation);
    const reservationsaved = await reservationFound
      .set({ idReservationStatus: 2 })
      .save();
    return reservationsaved;
  }

  async addCheckOut({ idReservation }) {
    const reservationFound = await Reservation.findByPk(idReservation);
    const reservationSaved = await reservationFound
      .set({ idReservationStatus: 3 })
      .save();
    return reservationSaved;
  }
}
