import { ToastContainer } from 'react-toastify';
import { Aside, SquadUpdate as Update } from '../../../components/company';

const SquadUpdate = function () {
  return (
    <>
      <Aside />
      <Update />
      <ToastContainer
        position="top-right"
        autoClose={3500}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default SquadUpdate;
