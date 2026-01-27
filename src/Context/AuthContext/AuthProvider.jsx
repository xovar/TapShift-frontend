import React, { useEffect, useState } from 'react'
import { AuthContext } from './Authcontext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const provider = new GoogleAuthProvider();

export default function AuthProvider({children}) {

  const [user , setUser] = useState();
  const [loading, setLoading] = useState();

  const signUp = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth,provider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log("user credential : " , currentUser);
      setLoading(false);
    });

    () => {
      unsubscribe();
    }
    
  },[])

    const authInfo ={
      user,
      loading,
      signUp,
      signInWithGoogle,
      signIn,
      logOut,
    }

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}
