// src/api/apiConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Use import.meta.env for Vite
  headers: {
    'Content-Type': 'application/json',
     'apiKey' : 'd25b98f9*c561*4c88*ace4*5d5439',
  },
});

// Error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    let message;
    switch (status) {
      case 204:
        message = 'No content available.';
        break;
      case 400:
        message = 'Bad Request. Please check the data sent.';
        break;
      case 404:
        message = 'Resource not found.';
        break;
      case 500:
        message = 'Internal Server Error. Please try again later.';
        break;
      default:
        message = 'An unknown error occurred.';
    }
    return Promise.reject(new Error(message));
  }
);

export default axiosInstance;
