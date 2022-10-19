import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { authContext } from '../contexts/UserContexts';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(authContext);
    if(user && user?.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoutes;