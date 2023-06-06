export interface Cost {
  id: string;
  name: string;
  value: number;
  description: string | null;
  image: string | null;
  driver: string;
  vehicle: string;
  date: Date;
}

export interface FindCostResponse {
  payload: Cost[];
}
