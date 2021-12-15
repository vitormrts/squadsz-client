// import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Aside, Dashboard as DashboardEmployee } from '../../../components/employee';
// import { useAuth, useSquad } from '../../../hooks';

const Dashboard = function () {
  // const { user, loading } = useAuth();
  // const { squad } = useSquad(user.id_squad);

  // useEffect(() => {
  //   if (squad.id_sprint !== undefined) {
  //     window.location.href = `/sprints/${squad.id_sprint}`;
  //   }
  // }, [loading, user, squad]);

  return (
    <>
      <Aside />
      <DashboardEmployee />
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
