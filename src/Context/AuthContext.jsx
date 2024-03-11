import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
export const FirebaseContext = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  //google
  const googleSignUp = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // ‍sign up
  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // ‍sign in
  const signIn = (email, password) => {
    setLoading(true)
  return  signInWithEmailAndPassword(auth, email, password)
  }
  //manage user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
    });
  }, []);

  //log out
  const LogOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  //update profile
  const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

 
   
  //value
  const authInfo = {
    googleSignUp,
    signUp,
    signIn,
    user,
    LogOut,
    loading,
    handleUpdateProfile
  }
  return (
    <FirebaseContext.Provider value={authInfo}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default AuthContext;