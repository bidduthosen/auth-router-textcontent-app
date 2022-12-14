import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/Firebase.init';

export const authContext = createContext({});
    const auth = getAuth(app);

const UserContexts = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading]= useState(true);
    const googleProvider = new GoogleAuthProvider()


    const signInGoogle =()=>{
        return signInWithPopup(auth, googleProvider);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
            console.log("auth state change:",currentUser);
        })
        return () =>{
            unsubscribe()
        }
    },[]);

    const logOut = () =>{
        return signOut(auth);
    }
    
    const authInfo = {user, loading, createUser, loginUser, logOut, signInGoogle};
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContexts;