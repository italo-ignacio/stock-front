export enum routePaths {
  dashboard = '/dashboard',
  login = '/',
  myFleets = '/minhas-frotas',
  fleet = '/minhas-frotas/:fleetId'
}

export const paths = {
  dashboard: '/dashboard',
  fleet: (fleetId: string): string => `/minhas-frotas/${fleetId}`,
  login: '/',
  myFleets: '/minhas-frotas'
};

export const apiPaths = {
  account: {
    auth: '/auth/account',
    register: '/account'
  },
  driver: {
    auth: '/auth/driver',
    register: '/driver'
  },
  refreshToken: '/auth/refresh-token',
  vehicle: '/vehicle',
  vehicleFleet: '/vehicle-fleet'
};
