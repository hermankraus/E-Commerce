import  { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
    const [userType, setUserType] = useState(false);


  return (
    <AuthContext.Provider value={{setUserType, userType}}>
      {children}
    </AuthContext.Provider>
  );
};

