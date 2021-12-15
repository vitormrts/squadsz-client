import { ToastContainer } from 'react-toastify';
import { Aside, Employees as EmployeesInfo } from '../../../components/company';

const Employees = function () {
  return (
    <>
      <Aside />
      <EmployeesInfo />
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

export default Employees;
