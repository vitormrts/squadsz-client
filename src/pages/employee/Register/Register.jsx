import { ToastContainer } from 'react-toastify';

const Register = function () {
  return (
    <div>
      <h1>Registrar empresa</h1>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Register;
