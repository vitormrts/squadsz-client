import { API_URL } from '@src/config/base';
import axios from 'axios';

const api = axios.create({
  baseURL: API_URL
});

export default api;
