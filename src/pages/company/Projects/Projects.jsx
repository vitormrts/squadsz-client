import { ToastContainer } from 'react-toastify';
import { Aside, Projects as ProjectsInfo } from '../../../components/company';

const Projects = function () {
  return (
    <>
      <Aside />
      <ProjectsInfo />
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

export default Projects;
