import { z } from "zod";

export const reservationShema = z.object({
  checkInDateReservation: z.date({
    required_error: "checkInDateReservation must be a date"
  }),
  checkOutDateReservation: z.date({
    required_error: "checkOutDateReservation must be a date"
  }),
  companionReservation: z.string({
    required_error: "companionReservation must be a string"
  }),
  reasonReservation: z.string({
    required_error: "reasonReservation must be a string"
  })
});
