import { array, number, object, string } from 'yup';

export const locationSchema = object().shape({
  description: string().required(),
  lat: number().required(),
  lng: number().required()
});

export const arrayLocationSchema = array().of(locationSchema);
