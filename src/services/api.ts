import axios from 'axios'

export const apiBlockPoint = axios.create({
    baseURL: 'http://192.168.0.13:9050'
})

export const apiRoute = axios.create({
    baseURL: 'http://192.168.0.13:3333'
})