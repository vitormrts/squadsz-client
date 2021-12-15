import { useEffect, useState } from 'react';
import api from '../../services/api';

const useSprint = (id) => {
  const [sprint, setSprint] = useState({});
  const [tasks, setTasks] = useState([]);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/sprint/${id}`);
        setSprint(data.sprint);
        setTasks(data.tasks);
        setLists(data.lists);
        setLoading(false);
      } catch (error) {
        window.location.href = '/';
      }
    })();
  }, [id]);

  return { sprint, tasks, lists, loading };
};

export default useSprint;
