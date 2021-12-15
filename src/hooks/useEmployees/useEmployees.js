import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

const useEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/employees');
        setEmployees(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  }, []);

  return { employees, loading };
};

export default useEmployees;
