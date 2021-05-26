import axios from 'axios';

export const apiRoute = axios.create({
    baseURL: 'https://jrlpgzdtl1.execute-api.sa-east-1.amazonaws.com/test/directions/api',
})