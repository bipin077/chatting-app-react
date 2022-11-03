import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoutes = ({children}) => {
    const {adminToken} = useSelector((state) => state.authReducer);
    return adminToken ? <Navigate to="/" /> : children; 
}

export default PublicRoutes;