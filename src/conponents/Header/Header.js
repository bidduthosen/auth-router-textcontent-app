import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { authContext } from '../../contexts/UserContexts';

const Header = () => {
    const {user, logOut} = useContext(authContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error =>console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Awesome Auth</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link> 
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>

            <div className='login'>
                {user?.email && user?.uid ? 
                <button onClick={handleLogOut} className="btn btn-accent btn-sm">Logout</button>
                :
                <Link to='/login'><button className="btn btn-accent btn-sm">Login</button></Link>
                }
                {user?.email && <p>Welcome, <small>{user?.email}</small></p>}
            </div>
            </div>
        </div>
    );
};

export default Header;