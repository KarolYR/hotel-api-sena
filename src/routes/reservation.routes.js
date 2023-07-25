import { Router } from "express";
import { ReservationController } from "../controllers/reservation.controller.js";
import { authRequired } from "../middlewares/auth/validateToken.js";
const router = new Router();

const reservationController = new ReservationController();

router.get(
  "/reservations",
  authRequired,
  reservationController.getReservations
);

router.post(
  "/reservations",
  authRequired,
  reservationController.postReservation
);

// router.post(
//   "/reservations/:idReservation/package/idPackage",
//   authRequired,
//   reservationController.postPackageToReservation
// );

export default router;
