import axios from 'axios'

export const apiRoute = axios.create({
    baseURL: 'http://lb-notificator-1500945349.us-east-2.elb.amazonaws.com/directions'
})