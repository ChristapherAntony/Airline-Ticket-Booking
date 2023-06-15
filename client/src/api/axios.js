import axios from 'axios';
import { errorTost } from '../Components/tost';

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
        const { response,code } = error;

        if (response) {
            // The request was made and the server responded with a status code
            const { data, status } = response;

        
            // Extract the error message from the response data
            const errorMessage = data?.error?.message || error.message || 'An error occurred';

            // Construct a structured error object with relevant information
            const structuredError = {
                code,
                status,
                message: errorMessage,
            };


            // Throw the structured error to propagate it to the catch block
            throw structuredError;
        } else {
            // The request was made but no response was received
            // Handle network errors, timeouts, etc.
            // throw error;
            errorTost('Server error!')
        }
    }
);

export default axiosApi;














// import axios from 'axios';

// const axiosApi = axios.create({
//     baseURL: import.meta.env.VITE_REACT_APP_SERVER_BASE_URL,
//     withCredentials: true
// });

// // Request interceptor
// axiosApi.interceptors.request.use(
//     (config) => {
//         // Modify request config if needed
//         // Add headers, authentication token, etc.
//         return config;
//     },
//     (error) => {
//         // Handle request errors
//         return Promise.reject(error);
//     }
// );

// // Response interceptor
// axiosApi.interceptors.response.use(
//     (response) => {
//         // Modify response data if needed
//         return response;
//     },
//     (error) => {
//         // Handle response errors
//         return Promise.reject(error);
//     }
// );

// export default axiosApi;
