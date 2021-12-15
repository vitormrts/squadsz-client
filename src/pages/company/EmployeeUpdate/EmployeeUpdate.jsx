import { ToastContainer } from 'react-toastify';
import { Aside, EmployeeUpdate as Update } from '../../../components/company';

const EmployeeUpdate = function () {
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

export default EmployeeUpdate;
