import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useUsers from './useUsers';

const UsetansTackQuery = () => {
    const secureAxios = useAxiosSecure()
    const { users, loading } = useUsers()
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', users?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await secureAxios.get(`/carts?email=${users?.email}`)
            return res.data
        }
    });

    // console.log(cart);
    return [cart, refetch]

};

export default UsetansTackQuery;