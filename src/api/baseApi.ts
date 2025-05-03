import { getCookie } from '../utils/getCookie';
import axios from 'axios';

const baseApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
    },
});

baseApi.interceptors.request.use(
    (config) => {
        const token = getCookie('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

baseApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Response error:', error);
        return Promise.reject(error);
    },
);

export default baseApi;
