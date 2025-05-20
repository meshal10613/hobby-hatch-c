import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const SignInUser = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const SignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, []);

    const updateUser = (updateProfileInfo) => {
        return updateProfile(auth.currentUser, updateProfileInfo)
    };

    const signOutUser = () => {
        return signOut(auth)
    }

    const authData = {
        user, 
        setUser,
        SignInUser,
        SignUpUser,
        updateUser,
        signOutUser,
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;