import React from 'react';
import useUsers from '../hooks/useUsers';
import { Navigate, useLocation } from 'react-router-dom';

const PrivarteRoutes = (children ) => {
    const location = useLocation()
    const { user, loading } = useUsers()
    if (loading) {
        return <div className='min-h-screen flex items-center justify-center '>
            <span className='loading-spinner'></span>
        </div>
    }

    if (!user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location.pathname }} replace ></Navigate>
};

export default PrivarteRoutes;