import React from "react";
import ball from "../assets/images/CricketBall-unscreen.gif";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";

const PrivateRoute = ({ allowedRoles, children }) => {
  const { isAuthenticated, user, loading } = useAuth();
  const storedRoles = user?.roles || [];

  console.log("isAuthenticated:", isAuthenticated);
  console.log("User roles:", storedRoles);

  if(loading){
    return (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
            <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
          </div>
  )}

  if (!isAuthenticated) {
    console.warn("User not authenticated. Redirecting to login.");
    return <Navigate to="/login" replace />;
  }

  // Check if any of the user's roles match the allowedRoles for the route
  const hasAccess = allowedRoles.some((role) => storedRoles.includes(role));

  if (!hasAccess) {
    console.warn("Access denied. Redirecting to unauthorized page.");
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default PrivateRoute;


