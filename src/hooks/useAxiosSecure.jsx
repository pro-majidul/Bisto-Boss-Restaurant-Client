
import axios from 'axios';

export const AxiosSecure = axios.create({
    baseURL: 'http://localhost:9000'
})

const useAxiosSecure = () => {

    return AxiosSecure
};

export default useAxiosSecure;