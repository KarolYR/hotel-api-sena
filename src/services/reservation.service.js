import { daysBetweenDates } from "../utils/functions.js";

import ReservationStatus from "../models/reservationStatus.model.js"; 
import  Reservation  from "../models/reservation.model.js";

export class ReservationService {
  async fetchReservations() {
    const reservationsFound = await Reservation.findAll();
    return reservationsFound;
  }

  async fetchReservation({ idReservation }) {
    const reservationFound = await Reservation.findByPk(idReservation, {
      include: [
        {
          model: ReservationStatus,
          atributes: ["idStatusReservation"],
        },
      ],
    });
    return reservationFound;
  }

  async addReservation({ reservation, idUser }) {
    const { checkInDateReservation, checkOutDateReservation } = reservation;
    
    const daysReservation = daysBetweenDates(
      checkInDateReservation,
      checkOutDateReservation
    );
    
    const dataReservation = {
      ...reservation,
      idUser,
      daysReservation,
    };

    const createdReservation = await Reservation.create(dataReservation);
    return createdReservation;
  }

  async updateReservation({ idReservation, reservation }) {
    const reservationFound = await Reservation.findByPk(idReservation);
    const reservationSaved = reservationFound.set(reservation).save();
    return reservationSaved;
  }

  async removeReservation({ idReservation }) {
    await Reservation.destroy({
      where: {
        id: idReservation,
      },
    });
    return true;
  }
}
