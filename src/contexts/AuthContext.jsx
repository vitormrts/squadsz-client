import { createContext } from 'react';
import { useAuth } from '../hooks';

const AuthContext = createContext();

const AuthProvider = function ({ children }) {
  const { authenticated, error, handleLogin, handleLogout, loading, user } = useAuth();

  return (
    <AuthContext.Provider
      value={{ loading, authenticated, handleLogin, error, handleLogout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
