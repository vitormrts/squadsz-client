import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/projects');
        setProjects(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  }, []);

  return { projects, loading };
};

export default useProjects;
