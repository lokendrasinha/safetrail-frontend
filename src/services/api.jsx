// api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://safetrail-api.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add auth token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
