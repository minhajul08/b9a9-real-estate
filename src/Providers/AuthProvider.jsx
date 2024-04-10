import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext (null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState (null);
    // create user
    const createUser = (email,password) => {
     return createUserWithEmailAndPassword (auth,email,password);
    }

    // login

    const signIn = (email,password) => {
        return signInWithEmailAndPassword (auth,email,password);
    }
    
    // logout

    const logOut = () => {
        return signOut (auth)
    }

    useEffect (() => {
      const unSubscribe = onAuthStateChanged (auth,currentUser => {
            console.log ('use see in the sky',currentUser)
            setUser (currentUser)
        })
        return () => {
            unSubscribe ();
        }
    } , [])


    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;