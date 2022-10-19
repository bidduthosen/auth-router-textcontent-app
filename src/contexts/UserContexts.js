import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/Firebase.init';

export const authContext = createContext({});
    const auth = getAuth(app);

const UserContexts = ({children}) => {

    const [user, setUser] = useState({});
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
            console.log("auth change context:",currentUser);
        })
        return () =>{
            unsubscribe()
        }
    },[]);

    const logOut = () =>{
        return signOut(auth);
    }
    
    const authInfo = {user, createUser, loginUser, logOut, signInGoogle};
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContexts;