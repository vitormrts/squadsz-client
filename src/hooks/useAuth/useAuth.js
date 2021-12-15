import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

const useAuth = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const login = ({ token, userData }) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    api.defaults.headers.common.type = userData.type;
    api.defaults.headers.common.id = userData.id;
    setAuthenticated(true);
    setIsAdmin(userData.type === 0);
    setUser(userData);
  };

  const logout = () => {
    api.defaults.headers.common.Authorization = undefined;
    localStorage.removeItem('token');
    setAuthenticated(false);
    setUser({});
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    const userData = JSON.parse(localStorage.getItem('user'));

    if (token) {
      login({ token, userData });
    }

    setLoading(false);
  }, []);

  const handleLogin = ({ email, password, path, redirect }) => {
    (async () => {
      try {
        const { data } = await api.post(`/${path}/login`, { email, password });

        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', JSON.stringify(data.user));

        login({ token: data.token, userData: data.user, path });
        window.location.href = `/${redirect}`;
      } catch (err) {
        toast.error(err.response.data.message);
      }
    })();
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return { authenticated, user, loading, handleLogin, handleLogout, isAdmin };
};

export default useAuth;
