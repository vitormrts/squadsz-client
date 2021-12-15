import { ToastContainer } from 'react-toastify';
import { Aside, ProjectRegister as Register } from '../../../components/company';

const ProjectRegister = function () {
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

export default ProjectRegister;
