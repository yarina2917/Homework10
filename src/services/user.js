import axios from 'axios';

const axiosConfig = {
    baseURL: 'https://homework9server.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json',
    }
};

export const registerUser = (data) => {
    return axios.post('registration', data, axiosConfig)
};

export const loginUser = (data) => {
    return axios.post('login', data, axiosConfig)
};

export const updateUser = (data, token) => {
    axiosConfig.headers['x-apikey'] = token;
    return axios.put('user', data, axiosConfig)
};
