import { boolean, object, string } from 'yup';
import type { InferType } from 'yup';

export const vehicleFleetSchema = object().shape({
  autoApproveCost: boolean(),
  name: string().required()
});

export type VehicleFleetRequest = InferType<typeof vehicleFleetSchema>;
