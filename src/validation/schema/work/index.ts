import { date, number, object, string } from 'yup';
import type { InferType } from 'yup';

export const workSchema = object().shape({
  date: date(),
  destiny: string().required(),
  distance: number().required(),
  driverId: string().required(),
  extra: number(),
  match: string().required(),
  profit: number().required(),
  vehicleId: string().required()
});

export type WorkRequest = InferType<typeof workSchema>;
