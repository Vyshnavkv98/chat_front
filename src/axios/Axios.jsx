import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:5000/', // Set your base URL here
  withCredentials: true, // Include cookies in requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Axios