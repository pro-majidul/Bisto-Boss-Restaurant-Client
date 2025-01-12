import useAxiosSecure from './useAxiosSecure';
import useUsers from './useUsers';
import { useQuery } from '@tanstack/react-query';

// kono ekta user admin ki na seta check korar jonne custom hooks

const useAdmin = () => {
    const AxiosSecure = useAxiosSecure()
    const { users, loading } = useUsers();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [users?.email, 'isAdmin'],
        enabled: !loading && !!users?.email,
        queryFn: async () => {
            const res = await AxiosSecure.get(`/users/admin/${users?.email}`)
            return res.data?.Admin;
        },


    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;