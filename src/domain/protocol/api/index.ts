import type { apiPaths } from 'main/config';

export interface ApiProps {
  route: apiPaths | string;
  body?: unknown;
  id?: number | string;
  method?: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
  queryParams?: URLSearchParams;
  isFormData?: boolean;
}
