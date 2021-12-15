import { useEffect, useState } from 'react';
import api from '../../services/api';

const useEmployee = (id) => {
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/employee/${id}`);
      setEmployee(data);
      setLoading(false);
    })();
  }, []);

  return { employee, loading };
};

export default useEmployee;
