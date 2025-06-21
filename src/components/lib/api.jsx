import axios from 'axios';

// Base URL configured directly in the axios instance
export const baseUrl = 'https://haditha.api.t.etratnet.ir/';

// Creating an axios instance with the base URL
const api = axios.create({
  baseURL: baseUrl,
});

// Request interceptor to add the Authorization token to request headers
api.interceptors.request.use(config => {
  const token = localStorage.getItem("tokencameratracker");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Response interceptor for handling errors like 401 Unauthorized
api.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('tokencameratracker');
    window.location.reload();
  }
  return Promise.reject(error);
});

// Function to fetch data using the configured Axios instance
export const fetcher = async (url) => {
  try {
    const response = await api.get(url); // Use the relative URL since baseURL is configured
    return response.data;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err; // Re-throw the error for further handling
  }
};

export default api;
