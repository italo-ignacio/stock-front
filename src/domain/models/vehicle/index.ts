export interface Vehicle {
  id: string;
  name: string;
  type: string;
  image: string | null;
  costByYear: [];
  work: [];
}

export interface FindVehicleResponse {
  payload: Vehicle[];
}
