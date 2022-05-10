import axios from 'axios'
// import { toast } from 'react-toastify';

const client = axios.create({ baseURL: process.env.APIURL })
let token = ""
if (typeof window !== 'undefined') {
    token = localStorage.getItem("jwtToken")
}
export const request = ({ ...options }) => {
    if (token) {
        client.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    const onSuccess = response => {
        console.log("response from interceptor", response);
        if (response.status === 200) {
            // toast.success(`${response.data.message}`);
            console.log("Success 200")
        }
        return response.data
    }
    const onError = error => {
        // optionaly catch errors and add additional logging here
        console.log("error from interceptor", error);
        return error
    } 

    return client(options).then(onSuccess).catch(onError)
}