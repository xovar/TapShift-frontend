import React, { useEffect, useState } from 'react'
import { AuthContext } from './Authcontext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

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

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
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
      logOut,
      signIn
    }

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}
