import { array, object, string } from 'yup';
import type { InferType } from 'yup';

export const driverSchema = object().shape({
  email: string().email().required(),
  name: string().required(),
  vehicleFleetList: array().of(string().required())
});

export type DriverRequest = InferType<typeof driverSchema>;
