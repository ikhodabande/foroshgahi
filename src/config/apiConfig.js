import axios from 'axios';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://webcomapi.ir/api/Store";

const axiosInstance = axios.create({
  baseURL: VITE_API_BASE_URL,
  headers: {
    'apiKey': import.meta.env.VITE_API_KEY,
    "Content-Type":
    "multipart/form-data; boundary=<calculated when request is sent>",
    accept: "*/*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods":
    "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
    "X-Requested-With, content-type, Authorization",
  },
});

// Error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) {
      const { status } = response;
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
      console.error('API Error:', error);
      return Promise.reject(new Error(message));
    } else {
      console.error('Network Error:', error);
      return Promise.reject(new Error('Network error, please try again later.'));
    }
  }
);

export default axiosInstance;
