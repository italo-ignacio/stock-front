import { decodeToken } from 'main/utils/token';
import type { UserProps } from 'domain/models';

export const convertUser = (): UserProps => decodeToken().user;
