import ErrorHandler from "../error/error.js";
import { reservation } from "../models/reservationSchema";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
  if (!firstName || !lastName || !email || !phone || !date || !timeH) {
    return next(new ErrorHandler("Please fill full reservation form!", 400));
  }
  try {
    await reservation.create(firstName, lastName, email, phone, date, time);
    res.status(200),json ({
        success:true,
        message:"Reservation sent successfully",
        
    })
  } catch (error) {}
};
