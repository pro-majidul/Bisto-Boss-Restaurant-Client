import useAxiosSecure from './useAxiosSecure';
import useUsers from './useUsers';
import { useQuery } from '@tanstack/react-query';

// kono ekta user admin ki na seta check korar jonne custom hooks

const useAdmin = () => {
    const AxiosSecure = useAxiosSecure()
    const { users } = useUsers();
    const { data: isAdmin } = useQuery({
        queryKey: [users?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await AxiosSecure.get(`/users/admin/${users?.email}`)
            return res.data?.Admin;
        }
    })
    return [isAdmin]
};

export default useAdmin;