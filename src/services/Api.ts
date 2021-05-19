import Axios from 'axios';

const API_BASE_URL = 'https://restcountries.eu/rest/v2';

export const API_PATHS = {
  getAll: '/all',
  searchByName: '/name',
};

const api = Axios.create({
  baseURL: API_BASE_URL,
});

export default api;
