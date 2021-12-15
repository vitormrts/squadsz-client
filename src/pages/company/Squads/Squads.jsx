import { ToastContainer } from 'react-toastify';
import { Aside, Squads as SquadsInfo } from '../../../components/company';

const Squads = function () {
  return (
    <>
      <Aside />
      <SquadsInfo />
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

export default Squads;
