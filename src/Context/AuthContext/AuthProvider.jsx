import React from 'react'
import { AuthContext } from './Authcontext'

export default function AuthProvider({children}) {

    const authInfo ={

    }

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}
