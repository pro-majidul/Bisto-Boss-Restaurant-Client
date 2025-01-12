import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import { auth } from '../firebase/firebase.config';
import usePublicAxios from '../hooks/usePublicAxios';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const publicAxios = usePublicAxios()
    const userSignUp = async (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const userlogin = async (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userLogout = async () => {
        setLoading(true);
        return signOut(auth);
    }
    const UserProfileUpdate = async (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googgleProvider = new GoogleAuthProvider();
    const googleSignIn = async () => {
        setLoading(true);
        return signInWithPopup(auth, googgleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUsers => {
            if (currentUsers?.email) {
                setUsers(currentUsers);
          
                publicAxios.post('/jwt', { email: currentUsers.email })
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false)
                        }
                    })

            } else {
               
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        })

        return () => {
            unsubscribe();
        }
    }, [publicAxios]);

    const authInfo = {
        userSignUp,
        userlogin,
        googleSignIn,
        users,
        setUsers,
        loading,
        userLogout,
        UserProfileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;