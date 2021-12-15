import { ToastContainer } from 'react-toastify';
import { Aside } from '../../../components/company';
import { Sprints as SprintsInfo } from '../../../components/sprint';

const Sprints = function () {
  return (
    <>
      <Aside />
      <SprintsInfo />
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

export default Sprints;
