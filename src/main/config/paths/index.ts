export enum routePaths {
  dashboard = '/dashboard',
  login = '/',
  myFleets = '/minhas-frotas',
  fleet = '/minhas-frotas/:id'
}

export const paths = {
  dashboard: '/dashboard',
  fleet: (id: string): string => `/minhas-frotas/${id}`,
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
