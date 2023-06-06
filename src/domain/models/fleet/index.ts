import type { Vehicle } from 'domain/models/vehicle';

export interface Fleet {
  id: string;
  name: string;
  vehicle: Vehicle[];
}

export interface FindFleetResponse {
  payload: Fleet[];
}
