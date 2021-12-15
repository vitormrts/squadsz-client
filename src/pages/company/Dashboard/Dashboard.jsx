import { ToastContainer } from 'react-toastify';
import { Aside, Charts } from '../../../components/company';

const Dashboard = function () {
  return (
    <>
      <Aside />
      <Charts />
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

export default Dashboard;
