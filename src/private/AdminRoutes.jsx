import useUsers from '../hooks/useUsers';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = (children) => {
    const { user, loading } = useUsers()
    const location = useLocation(F)
    if (loading) {
        return <div className='flex items-center justify-center min-h-screen'>
            <span className='loading-spinner'></span>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location.pathname }}></Navigate>
    }
    return children
};

export default AdminRoutes;