import axios from 'axios'

export const apiRoute = axios.create({
    baseURL: 'http://18.231.13.37:8080/app-api'
})