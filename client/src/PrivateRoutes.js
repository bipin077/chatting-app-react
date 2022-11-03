import React from 'react';
import {useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
  const {adminToken} = useSelector((state)=>state.authReducer);
  return adminToken ? children : <Navigate to="/login" />
}

export default PrivateRoutes