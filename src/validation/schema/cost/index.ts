import { date, mixed, object, string } from 'yup';
import type { InferType } from 'yup';

export const costSchema = object().shape({
  date: date(),
  description: string(),
  driverId: string(),
  image: mixed(),
  name: string().required(),
  value: string().required(),
  vehicleId: string().required()
});

export type CostRequest = InferType<typeof costSchema>;
