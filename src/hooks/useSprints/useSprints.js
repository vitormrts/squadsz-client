import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

const useSprints = () => {
  const [sprints, setSprints] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/sprints');
        setSprints(data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  }, []);

  return { sprints, setSprints };
};

export default useSprints;
