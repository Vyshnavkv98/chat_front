import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://chat-backend-2aqv.onrender.com/', // Set your base URL here
  withCredentials: true, // Include cookies in requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Axios