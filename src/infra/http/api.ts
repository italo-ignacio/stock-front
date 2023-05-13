import { fetchApi, fetchApiNoToken } from './api.function';

import type { ApiProps } from 'domain/protocol';

export const api = {
  delete: <T>(params: Omit<ApiProps, 'body' | 'method'>): Promise<T> =>
    fetchApi({ ...params, method: 'DELETE' }),
  get: <T>(params: Omit<ApiProps, 'body' | 'method'>, url?: string): Promise<T> =>
    fetchApi({ ...params, method: 'GET' }, url),
  patch: <T>(params: Omit<ApiProps, 'method'>): Promise<T> =>
    fetchApi({ ...params, method: 'PATCH' }),
  post: <T>(params: Omit<ApiProps, 'method'>): Promise<T> =>
    fetchApi({ ...params, method: 'POST' }),
  put: <T>(params: Omit<ApiProps, 'method'>): Promise<T> => fetchApi({ ...params, method: 'PUT' }),
  request: <T>(params: ApiProps): Promise<T> => fetchApiNoToken({ ...params })
};
