import * as axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.stackexchange.com',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})