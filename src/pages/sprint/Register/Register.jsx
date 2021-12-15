import { ToastContainer } from 'react-toastify';
import { Aside } from '../../../components/company';
import { Register as RegisterForm } from '../../../components/sprint';

const Register = function () {
  return (
    <>
      <Aside />
      <RegisterForm />
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

export default Register;
