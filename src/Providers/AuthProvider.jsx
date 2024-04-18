import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext (null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState (null);
    const [loading,setLoading] = useState (true)
    // create user
    const createUser = (email,password) => {
        setLoading (true)
     return createUserWithEmailAndPassword (auth,email,password);
    }

    // update user profile

    const updateUserProfile = (name,image) => {
       return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }

    // login

    const signIn = (email,password) => {
        setLoading (true)
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
            setLoading (false)
        })
        return () => {
            unSubscribe ();
        }
    } , [])


    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        signIn,
        logOut,
        loading
    }
    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;