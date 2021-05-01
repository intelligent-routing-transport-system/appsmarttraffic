import axios from 'axios'

export const apiBlockPoint = axios.create({
    baseURL: 'http://18.191.159.218:9050'
})

export const apiRoute = axios.create({
    baseURL: 'http://18.191.159.218:3333'
})