export enum routePaths {
  dashboard = '/dashboard',
  login = '/',
  myFleets = '/minhas-frotas',
  myDrivers = '/meus-motoristas',
  fleet = '/minhas-frotas/:fleetId',
  vehicle = '/minhas-frotas/:fleetId/:vehicleId'
}

export const paths = {
  dashboard: '/dashboard',
  fleet: (fleetId: string): string => `/minhas-frotas/${fleetId}`,
  login: '/',
  myDrivers: '/meus-motoristas',
  myFleets: '/minhas-frotas',
  vehicle: (fleetId: string, vehicleId: string): string => `/minhas-frotas/${fleetId}/${vehicleId}`
};

export const apiPaths = {
  account: '/account',
  activeDriver: '/driver/active',
  auth: {
    account: '/auth/account',
    driver: '/auth/driver'
  },
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
  work: '/work'
};

export type listQuery = 'account' | 'cost' | 'driver' | 'fleet' | 'vehicle' | 'work';
