import ReservationStatus from "../models/reservationStatus.model.js";


export class ReservationStatusService {
  async fetchReservationStatuss() {
    const reservationStatussFound = await ReservationStatus.findAll();
    return reservationStatussFound;
  }
  async fetchReservationStatus({ idReservationStatus }) {
    const reservationStatusFound = await ReservationStatus.findByPk(idReservationStatus);
    return reservationStatusFound;
  }
  async addReservationStatus({ reservationStatus }) {
    const createdReservationStatus = await ReservationStatus.create(reservationStatus);
    return createdReservationStatus;
  }
  async updateReservationStatus({ idReservationStatus, reservationStatus }) {
    const reservationStatusFound = await ReservationStatus.findByPk(idReservationStatus);
    const reservationStatusSaved = reservationStatusFound.set(reservationStatus).save(reservationStatus);
    return reservationStatusSaved;
  }
}


