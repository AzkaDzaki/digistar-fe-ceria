import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Example API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
