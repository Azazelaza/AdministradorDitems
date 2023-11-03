import axios from 'axios';

const axio = axios.create({
    baseURL: process.env.REST_API,
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

axio.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        config.headers = {
            ...config.headers,
            Authorization: `${token ? token : ''}`,
        };
        return config;
    }
);

axio.interceptors.response.use(
    (response) => response,
    (error) => {
        if (
            (error.response && error.response.status === 401) ||
            (error.response && error.response.status === 403) ||
            (error.response &&
                error.response.data.message === 'NO AUTORIZADO')
        ) {
            localStorage.removeItem('token');
            window.location.href = "/"
        }
        return Promise.reject(error);
    }
);

/* export default requestApi;
 */