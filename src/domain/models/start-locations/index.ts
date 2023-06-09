export interface Location {
  lat: number;
  lng: number;
  description: string;
}

export interface FindStartLocationResponse {
  payload: { startLocations: string };
}
