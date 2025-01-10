import useAdmin from '../hooks/useAdmin';
import useUsers from '../hooks/useUsers';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({ children }) => {
    const { users, loading } = useUsers()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <div className='flex items-center justify-center min-h-screen'>
            <span className='loading-spinner'></span>
        </div>
    }

    if (users && isAdmin) {
        return children
    }

    return <Navigate to='/' state={{ from: location.pathname }} replace></Navigate>
};

export default AdminRoutes;