import { object, string } from 'yup';
import type { InferType } from 'yup';

export const fleetSchema = object().shape({
  name: string().required()
});

export type FleetRequest = InferType<typeof fleetSchema>;
