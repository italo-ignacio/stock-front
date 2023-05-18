/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { HttpStatusCode } from 'domain/enums';
import { apiPaths } from 'main/config';
import { decryptData, encryptData, tokenIsExpired } from 'main/utils';
import { setTokenOnRefresh } from 'store/auth/slice';
import { store } from 'store';
import type { ApiProps } from 'domain/protocol';

const baseUrl = import.meta.env.VITE_API_URL;

export const fetchApiNoToken = async <T>(params: ApiProps): Promise<T> => {
  const response = await fetch(`${baseUrl}${params.route}${params.id ? `/${params.id}` : ''}`, {
    body: params.body ? JSON.stringify(params.body) : undefined,
    headers: {
      'content-type': 'application/json'
    },
    method: params.method || 'POST'
  });

  if (response.status === HttpStatusCode.noContent) return null as T;

  if (response.ok) return response.json();

  throw Object(await response.json());
};

export const refreshAccessToken = async (): Promise<void> => {
  const refreshToken = decryptData(store.getState().auth.refreshToken || '');

  const response = await fetch(`${baseUrl}${apiPaths.refreshToken}`, {
    body: JSON.stringify({ refreshToken }),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  });

  if (!response.ok) throw Object(await response.json());

  const { accessToken }: { accessToken: string } = await response.json();

  store.dispatch(setTokenOnRefresh({ accessToken: encryptData(accessToken) }));
};

export const fetchApi = async <T>(params: ApiProps, url?: string): Promise<T> => {
  let accessToken = decryptData(store.getState().auth.accessToken || '') || '';

  if (tokenIsExpired()) {
    await refreshAccessToken();
    accessToken = decryptData(store.getState().auth.accessToken || '') || '';
  }

  const response = await fetch(
    `${url ?? baseUrl}${params.route}${params.id ? `/${params.id}` : ''}${
      params.queryParams ? `?${new URLSearchParams(params.queryParams as URLSearchParams)}` : ''
    }`,
    {
      body: params.isFormData
        ? (params.body as 'BodyInit | null | undefined')
        : (JSON.stringify(params.body) as 'BodyInit | null | undefined'),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': params.isFormData ? 'multipart/form-data' : 'application/json;charset=UTF-8'
      },
      method: params.method
    }
  );

  if (response.status === HttpStatusCode.noContent) return null as T;

  if (response.headers.get('total-pages')) {
    const res = {
      content: await response.json(),
      totalElements: Number(response.headers.get('total-elements')),
      totalPages: Number(response.headers.get('total-pages'))
    };

    return res as T;
  }

  if (response.ok) return response.json();

  throw Object(await response.json());
};
