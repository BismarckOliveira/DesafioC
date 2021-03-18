import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface User {
  email: string;
  password: string;
}

interface IAuthContextData {
 name: string;
 signIn(credentials: User): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({children}) => {
const signIn = useCallback( async ({ email , password}) => {
  const response = await api.post('login',{
    email,
    password
  });
console.log(response);

},[])

  return (
    <AuthContext.Provider 
    value={{ name: 'Bismarck' , signIn }}>
     {children}
    </AuthContext.Provider>
  )
}

export { AuthContext , AuthProvider};