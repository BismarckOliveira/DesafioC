import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface IAuthState {
  token: string;
  name: string;
}

export interface ISinginCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  name: string;
  signIn(credentials: ISinginCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Conexa:token');
    const name = localStorage.getItem('@Conexa:Name');

    if (token && name) {
      return { token, name };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', {
      email,
      password,
    });

    const { token, name } = response.data;

    localStorage.setItem('@Conexa:token', token);
    localStorage.setItem('@Conexa:Name', name);

    setData({ token, name });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Conexa:token');
    localStorage.removeItem('@Conexa:Name');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ name: data.name, signIn, signOut }}>
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
