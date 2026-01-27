import React from "react";
import useAuth from "../Hooks/useAuth";
import { useLocation } from "react-router";

export default function PrivetRoutes({ children }) {
  const { user, loading } = useAuth();
  let location = useLocation();

  if(loading){
    return <span className="loading loading-spinner loading-xl"></span>
  }

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
