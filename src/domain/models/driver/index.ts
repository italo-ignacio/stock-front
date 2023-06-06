import type { Cost } from 'domain/models/cost';
import type { Work } from 'domain/models/work';

export interface Driver {
  id: string;
  name: string;
  email: string;
  cost: Cost[];
  work: Work[];
}

export interface FindDriverResponse {
  payload: Driver[];
}
