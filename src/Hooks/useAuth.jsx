import React, { useContext } from 'react'
import {AuthContext} from '../Context/AuthContext/Authcontext';

export default function useAuth() {
  const authInfo = useContext(AuthContext);
  return authInfo;
}
