import { object, string } from 'yup';
import type { InferType } from 'yup';

export const vehicleFleetSchema = object().shape({
  name: string().required()
});

export type VehicleFleetRequest = InferType<typeof vehicleFleetSchema>;
