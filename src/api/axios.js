import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/' });
export default api;

export const EndPoints = {
  products: 'products',
  departments: 'departments',
  categories: 'categories',
  login: 'login',
  register: 'register',
  users: 'users',
};
