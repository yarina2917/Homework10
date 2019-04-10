import axios from 'axios';

const axiosConfig = {
    baseURL: 'https://homework9server.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json',
    }
};

const setToken = (token) => {
    axiosConfig.headers['x-apikey'] = token;
};

export const getTodos = (token) => {
    setToken(token);
    return axios.get('todolist', axiosConfig)
};

export const postTodo = (todo, token) => {
    setToken(token);
    return axios.post('todolist', todo, axiosConfig)
};

export const updateTodo = (id, todo, token) => {
    setToken(token);
    return axios.put(`todolist/${id}`, todo, axiosConfig)
};

export const deleteTodo = (id, token) => {
    setToken(token);
    return axios.delete(`todolist/${id}`, axiosConfig)
};