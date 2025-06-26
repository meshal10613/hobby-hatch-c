import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const googleProvider = new GoogleAuthProvider();  
    
    //theme
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        setTheme(newTheme);
    };

    const SignInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const SignUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
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
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authData = {
        user, 
        setUser,
        loading,
        SignInUser,
        SignUpUser,
        updateUser,
        signOutUser,
        signInWithGoogle,
        theme,
        setTheme,
        toggleTheme,
        search,
        setSearch
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;