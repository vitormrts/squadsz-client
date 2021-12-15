import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

const useSquads = () => {
  const [squads, setSquads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/squads');
        setSquads(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  }, []);

  return { squads, loading };
};

export default useSquads;
