import { ToastContainer } from 'react-toastify';
import { Aside as CompanyAside } from '../../../components/company';
import { Aside as EmployeeAside } from '../../../components/employee';
import { Board } from '../../../components/sprint';
import { useAuth } from '../../../hooks';

const ActiveSprint = function () {
  const { isAdmin } = useAuth();

  return (
    <>
      {isAdmin ? <CompanyAside /> : <EmployeeAside />}
      <Board />
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
