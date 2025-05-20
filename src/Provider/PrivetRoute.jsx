import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../Pages/Loading';

const PrivetRoute = ({children}) => {
    const { loading } = use(AuthContext);
    if(loading){
        return <Loading/>
    }
    return (children);
};

export default PrivetRoute;