import type { Cost } from 'domain/models/cost';
import type { Work } from 'domain/models/work';

export interface Vehicle {
  id: string;
  name: string;
  licensePlate: string;
  type: string;
  image: string | null;
  cost: Cost[];
  work: Work[];
  fleet: Work[];
}

export interface FindVehicleResponse {
  payload: Vehicle[];
}
