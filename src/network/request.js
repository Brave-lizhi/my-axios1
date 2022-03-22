import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: 'https://httpbin.org',
        timeout: 5000,
        })
    instance.interceptors.request.use(config => {
        console.log(config)
        return config
        }, err => {
        config.log(err)
        })
    instance.interceptors.response.use(res => {
        console.log(res)
        return res
    }, err => {
        console.log(err)
    })
    return instance(config)
}