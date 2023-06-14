import axios from 'axios';

const axiosApi = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_SERVER_BASE_URL,
    withCredentials: true
});

// Request interceptor
axiosApi.interceptors.request.use(
    (config) => {
        // Modify request config if needed
        // Add headers, authentication token, etc.
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Response interceptor
axiosApi.interceptors.response.use(
    (response) => {
        // Modify response data if needed
        return response;
    },
    (error) => {
        // Handle response errors
        return Promise.reject(error);
    }
);

export default axiosApi;
