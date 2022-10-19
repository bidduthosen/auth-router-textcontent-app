import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { authContext } from '../contexts/UserContexts';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(authContext);

    if(loading){
        return <div>Loading...</div>;
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoutes;