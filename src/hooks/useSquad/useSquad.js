import { useEffect, useState } from 'react';
import api from '../../services/api';

const useSquad = (id) => {
  const [projects, setProjects] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [squad, setSquad] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/squad/${id}`);
      setSquad(data.squad);
      setEmployees(data.employees);
      setProjects(data.projects);
      setLoading(false);
    })();
  }, [id]);

  return { squad, employees, projects, loading };
};

export default useSquad;
