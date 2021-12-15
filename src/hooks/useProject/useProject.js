import { useEffect, useState } from 'react';
import api from '../../services/api';

const useProject = (id) => {
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/project/${id}`);
      setProject(data);
      setLoading(false);
    })();
  }, [id]);

  return { project, loading };
};

export default useProject;
