import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.backendless.com/159F45FD-861A-4DF9-95B7-C237F01DF9F5/6D0ED8A6-AD13-4C7E-9671-BB10B8ED6BAE/data',
    headers: {
        'Content-Type': 'application/json'
    }
})