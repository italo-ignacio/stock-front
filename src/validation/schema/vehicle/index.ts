import { array, mixed, object, string } from 'yup';
import type { InferType } from 'yup';

export const vehicleSchema = object().shape({
  driverList: array().of(string()),
  image: mixed(),
  licensePlate: string().required(),
  name: string().required(),
  type: string().required(),
  vehicleFleetId: string().required()
});

export type VehicleRequest = InferType<typeof vehicleSchema>;
