import { useState } from 'react';
import * as B from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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

    handleLogin({ email, password, path: 'company', redirect: 'empresa' });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Title className="mb-3">Entrar como empresa</S.Title>
          <B.Form onSubmit={handleSubmit}>
            <B.Form.Group className="mb-1">
              <S.Label htmlFor="email">E-mail</S.Label>
              <S.Input
                type="email"
                name="email"
                placeholder="minhaempresa@empresa.com"
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
          <S.Employee>
            Você é um funcionário? <Link to="/funcionario/entrar">Clique aqui</Link>
          </S.Employee>
          <S.Separator>ou</S.Separator>
          <S.RegisterCompany>
            Sua empresa não está cadastrada? <Link to="/empresa/registrar">Clique aqui</Link>
          </S.RegisterCompany>
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
