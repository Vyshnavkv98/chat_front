import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://chat-backend-2aqv.onrender.com/',
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt-token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance