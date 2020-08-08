import axios from 'axios';
import 'dotenv/config';

const api = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:3333'
})

export default api;
