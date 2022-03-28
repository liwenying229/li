import axios from 'axios'
let instance = axios.create({
    baseURL: "/api",
    timeout: 5000
})
export default instance