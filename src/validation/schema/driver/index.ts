import { array, object, string } from 'yup';
import type { InferType } from 'yup';

export const driverSchema = object().shape({
  email: string().email().required(),
  fleetList: array().of(string().required()),
  name: string().required()
});

export type DriverRequest = InferType<typeof driverSchema>;
