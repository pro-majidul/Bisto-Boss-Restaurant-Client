
import axios from 'axios';
import useUsers from './useUsers';
import { useNavigate } from 'react-router-dom';

export const AxiosSecure = axios.create({
    baseURL: 'http://localhost:9000'
})

const useAxiosSecure = () => {
    const { userLogout } = useUsers()
    const navigate = useNavigate()

    // interceptor for request to set a header authorizetion tokent when user call data 
    AxiosSecure.interceptors.request.use(config => {
        const token = localStorage.getItem('access-token');
        config.headers.Authorization=(`Bearer ${token}`);
        return config

    }, (error => {
        return Promise.reject(error)
    }))

    // interceptor for response when the wrong response come

    AxiosSecure.interceptors.response.use((response => {
        return response;
    }), async (error) => {
        const status = error?.response?.status;

        if (status === 401 || status === 403) {
            console.log('error');
            await userLogout()
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return AxiosSecure
};

export default useAxiosSecure;