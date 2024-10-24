// src/hooks/UseAuth.js
import { useState, createContext, useContext } from 'react';
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // Store the role
  const [user, setUser] = useState(null); // Optional: Store user details
  const login = (role, userData) => {
    setIsAuthenticated(true);
    setUserRole(role); // Set user role on login
    setUser(userData); // Set user data on login
    console.log("UserData: ", role);
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null); // Clear the role on logout
    setUser(null); // Clear user data on logout
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);