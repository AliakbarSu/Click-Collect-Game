import axios from 'axios'
import {apiConfig} from '../config/config'

const client = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
    Accept: 'application/json',
    },
    data: {
    // client_id: apiConfig.clientId,
    // client_secret: apiConfig.clientSecret,
    id: 'password',
    scope: '*',
    },
})

function getUrl(config) {
    if (config.baseURL) {
        return config.url.replace(config.baseURL, '')
    }
    return config.url
}
// Intercept all request
// client.interceptors.request.use(
//     config => {
//         console.log(
//         `%c ${config.method.toUpperCase()} - ${getUrl(config)}:`,
//         'color: #0086b3; font-weight: bold',config,);
//         return config;
//     },
//     error => Promise.reject(error),
// )
// Intercept all responses
// client.interceptors.response.use(
//     async response => {
//         console.log(
//             `${response}`,
//             'color: #008000; font-weight: bold',
//             response,
//         )
//         return response
//     },
//     error => {
//         console.log(
//             `${error.response}`,
//             'color: #a71d5d; font-weight: bold',
//             error.response,
//         )
//         return Promise.reject(error);
//     }
// )

export default client