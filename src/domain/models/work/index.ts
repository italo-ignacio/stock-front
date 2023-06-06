export interface Work {
  id: string;
  match: string;
  destiny: string;
  distance: number;
  profit: number;
  extra: number | null;
  status: 'FINISHED' | 'PENDING';
  driver: string;
  vehicle: string;
  date: Date;
}

export interface FindWorkResponse {
  payload: Work[];
}
