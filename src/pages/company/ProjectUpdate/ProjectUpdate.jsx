import { ToastContainer } from 'react-toastify';
import { Aside, ProjectUpdate as Update } from '../../../components/company';

const ProjectUpdate = function () {
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

export default ProjectUpdate;
