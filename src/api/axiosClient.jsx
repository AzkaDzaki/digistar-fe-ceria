import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://digistar-demo-be.vercel.app/api', // Example API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
