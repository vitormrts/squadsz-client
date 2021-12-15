import { ToastContainer } from 'react-toastify';
import { Aside, EmployeeRegister as Register } from '../../../components/company';

const EmployeeRegister = function () {
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

export default EmployeeRegister;
