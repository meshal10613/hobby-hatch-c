import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../Pages/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const { loading, user } = use(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading/>
    }
    if(user?.displayName && user?.email){
        return children
    }else{
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
};

export default PrivetRoute;