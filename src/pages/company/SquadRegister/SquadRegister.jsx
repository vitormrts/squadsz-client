import { ToastContainer } from 'react-toastify';
import { Aside, SquadRegister as Register } from '../../../components/company';

const SquadRegister = function () {
  return (
    <>
      <Aside />
      <Register />
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

export default SquadRegister;
