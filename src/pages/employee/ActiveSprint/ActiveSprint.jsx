import { ToastContainer } from 'react-toastify';
import { Aside } from '../../../components/employee';
// import { Board } from '../../../components/sprint';

const ActiveSprint = function () {
  return (
    <>
      <Aside />
      {/* <Board /> */}
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

export default ActiveSprint;
