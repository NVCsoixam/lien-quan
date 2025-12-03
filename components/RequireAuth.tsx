import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
    const location = useLocation();

    if (!isAuthenticated) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;