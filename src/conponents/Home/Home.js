import React, { useContext } from 'react';
import { authContext } from '../../contexts/UserContexts';

const Home = () => {
    const {user} = useContext(authContext);
    return (
        <div>
            <h1>This is home page</h1>
            {user?.email && <p>This is home: {user?.email}</p>}
            {user?.uid && <p>Uid: {user?.uid}</p>}
        </div>
    );
};

export default Home;