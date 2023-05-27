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
  account: {
    all: '/account',
    auth: '/auth/account'
  },
  cost: '/cost',
  driver: {
    active: '/driver/active',
    all: '/driver',
    auth: '/auth/driver',
    disable: '/driver/disable'
  },
  image: '/image',
  refreshToken: '/auth/refresh-token',
  vehicle: '/vehicle',
  vehicleFleet: '/vehicle-fleet'
};
