import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { carServiceValidations } from './carService.validation';
import { carServiceControllers } from './carService.controllers';
import { slotAppointmentValidation } from '../Slots/slots.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(carServiceValidations.createCarServiceValidationSchema),
  carServiceControllers.createCarService,
);

router.post(
  '/slots',
  validateRequest(
    slotAppointmentValidation.createSlotAppointmentValidationSchema,
  ),
  carServiceControllers.createSlotAppointment,
);

router.get('/:id', carServiceControllers.getSingleService);

router.put(
  '/:id',
  validateRequest(carServiceValidations.updateCarServiceValidationSchema),
  carServiceControllers.updateService,
);

router.delete('/:id', carServiceControllers.deleteService);

router.get('/', carServiceControllers.getAllServices);

export const CarServiceRoutes = router;
