import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const SignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        SignUpUser
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;