import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import usePublicAxios from './usePublicAxios';

const useMenu = () => {
    // const [items, setItems] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('http://localhost:9000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setItems(data);
    //             setLoading(false)

    //         })
    // }, [])
    const axiosPublic = usePublicAxios()
    const { data: items = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })
    return [items, loading, refetch]
};

export default useMenu;