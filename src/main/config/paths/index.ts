export enum routePaths {
  dashboard = '/dashboard',
  login = '/',
  myFleets = '/minhas-frotas',
  myDrivers = '/meus-motoristas',
  fleet = '/minhas-frotas/:fleetId'
}

export const paths = {
  dashboard: '/dashboard',
  fleet: (fleetId: string): string => `/minhas-frotas/${fleetId}`,
  login: '/',
  myDrivers: '/meus-motoristas',
  myFleets: '/minhas-frotas'
};

export const apiPaths = {
  account: {
    all: '/account',
    auth: '/auth/account'
  },
  driver: {
    all: '/driver',
    auth: '/auth/driver',
    disable: '/driver/disable'
  },
  refreshToken: '/auth/refresh-token',
  vehicle: '/vehicle',
  vehicleFleet: '/vehicle-fleet'
};
