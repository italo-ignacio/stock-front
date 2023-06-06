import { array, mixed, object, string } from 'yup';
import type { InferType } from 'yup';

export const vehicleSchema = object().shape({
  driverList: array().of(string()),
  fleetId: string().required(),
  image: mixed(),
  licensePlate: string().required(),
  name: string().required(),
  type: string().required()
});

export type VehicleRequest = InferType<typeof vehicleSchema>;
