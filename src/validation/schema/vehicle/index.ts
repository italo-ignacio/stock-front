import { array, boolean, object, string } from 'yup';
import type { InferType } from 'yup';

export const vehicleSchema = object().shape({
  autoApproveCost: boolean(),
  driverList: array().of(string()),
  image: string(),
  licensePlate: string().required(),
  name: string().required(),
  type: string().required(),
  vehicleFleetId: string().required()
});

export type VehicleRequest = InferType<typeof vehicleSchema>;
