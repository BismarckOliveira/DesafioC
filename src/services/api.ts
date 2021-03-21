import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

const token = localStorage.getItem('@Conexa:token');

export const config = {
  headers: { Authorization: `Bearer ${token}` },
};
export default api;
