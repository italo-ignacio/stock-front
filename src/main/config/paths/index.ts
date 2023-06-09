/* eslint-disable sort-keys-fix/sort-keys-fix */
export enum routePaths {
  login = '/',
  dashboard = '/dashboard',
  myWorks = '/minhas-entregas',
  newWork = '/nova-entrega',
  myFleets = '/minhas-frotas',
  fleet = '/minhas-frotas/:fleetId',
  vehicle = '/minhas-frotas/:fleetId/:vehicleId',
  myDrivers = '/meus-motoristas'
}

export const paths = {
  login: '/',
  dashboard: '/dashboard',
  myWorks: '/minhas-entregas',
  newWork: '/nova-entrega',
  myFleets: '/minhas-frotas',
  fleet: (fleetId: string): string => `/minhas-frotas/${fleetId}`,
  vehicle: (fleetId: string, vehicleId: string): string => `/minhas-frotas/${fleetId}/${vehicleId}`,
  myDrivers: '/meus-motoristas'
};

export const apiPaths = {
  account: '/account',
  activeDriver: '/driver/active',
  auth: {
    account: '/auth/account',
    driver: '/auth/driver'
  },
  client: '/client',
  cost: '/cost',
  disableDriver: '/driver/disable',
  driver: '/driver',
  fleet: '/fleet',
  recoverPassword: {
    account: '/auth/account/recover-password',
    driver: '/auth/driver/recover-password'
  },
  refreshToken: '/auth/refresh-token',
  vehicle: '/vehicle',
  work: '/work',
  startLocations: '/start-locations'
};

export type listQuery =
  | 'account'
  | 'client'
  | 'cost'
  | 'driver'
  | 'fleet'
  | 'startLocations'
  | 'vehicle'
  | 'work';
