export type Endpoints = 'settings';
export const getEndpointUrl = (apiMethod: Endpoints) => {
  const endpoints = getEndpoints();

  const baseUrl = 'http://api_address.com';

  const endpoint: string = endpoints[apiMethod];

  return `${baseUrl}${endpoint}`;
};

const getEndpoints = () => ({
  settings: '/settings',
});
