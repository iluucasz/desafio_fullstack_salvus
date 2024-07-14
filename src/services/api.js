import axios from 'axios';

export const api = axios.create({
    baseURL: "https://desafio-fullstack-salvus-api.onrender.com/",
    timeout: 5 * 1000,
});
