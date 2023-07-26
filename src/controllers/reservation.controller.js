import { ReservationService } from "../services/reservation.service.js";
const reservationService = new ReservationService();

export class ReservationController {
  async postReservation(req, res) {
    try {
      const createdReservation = await reservationService.addReservation({
        reservation: req.body,
        idUser: req.idUser,
      });
      res.status(200).json({ reservation: createdReservation });
    } catch (error) {
      res.status(404).json({ error: error });
    }
  }

  async getReservations(req, res) {
    try {
      const reservations = await reservationService.fetchReservations();
      res.status(200).json({ reservations });
    } catch (error) {
      res.status(404).json({ error: error });
    }
  }

  async postPackageToReservation(req, res) {
    const { idReservation, idPackage } = req.params;
  }
}
