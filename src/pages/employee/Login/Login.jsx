import { useState } from 'react';
import * as B from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import * as S from './Login.styles';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../hooks';

const Login = function () {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      toast.error('Preencha todos os campos');
      return;
    }

    handleLogin({ email, password, path: 'employee', redirect: 'funcionario' });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Title className="mb-3">Entrar como funcionário</S.Title>
          <B.Form onSubmit={handleSubmit}>
            <B.Form.Group className="mb-1">
              <S.Label htmlFor="email">E-mail</S.Label>
              <S.Input
                type="email"
                name="email"
                placeholder="soufuncionario@funcionario.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </B.Form.Group>
            <B.Form.Group className="mb-4">
              <S.Label htmlFor="password">Senha</S.Label>
              <S.Input
                type="password"
                name="password"
                placeholder="**********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </B.Form.Group>
            <S.Submit type="submit" as={B.Button} variant="primary" className="w-100">
              Entrar
            </S.Submit>
          </B.Form>
          <S.Company>
            Deseja entrar como empresa? <Link to="/">Clique aqui</Link>
          </S.Company>
        </S.Content>
      </S.Container>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </S.Wrapper>
  );
};

export default Login;
