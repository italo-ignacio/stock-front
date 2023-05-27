import { date, mixed, number, object, string } from 'yup';
import type { InferType } from 'yup';

export const costSchema = object().shape({
  date: date(),
  description: string(),
  driverId: string(),
  image: mixed(),
  name: string().required(),
  value: number().required(),
  vehicleId: string().required()
});

export type CostRequest = InferType<typeof costSchema>;
