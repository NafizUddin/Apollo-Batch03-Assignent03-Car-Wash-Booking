import express from 'express';
import { BookingControllers } from './booking.controllers';

const router = express.Router();

router.post('/', BookingControllers.createBooking);

export const BookingRoutes = router;