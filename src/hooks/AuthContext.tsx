import React, { createContext, useCallback, useContext } from 'react';
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

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', {
      email,
      password,
    });

    const { token, name } = response.data;

    localStorage.setItem('@conexa:token', token);
    localStorage.setItem('@conexa:name', name);
  }, []);

  return (
    <AuthContext.Provider value={{ name: '', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
