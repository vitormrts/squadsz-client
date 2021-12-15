import { useState } from 'react';
import * as B from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { cnpj as cnpjValidator } from 'cpf-cnpj-validator';
import { ToastContainer, toast } from 'react-toastify';
import * as S from './Register.styles';
import axios from '../../../services/api';
import 'react-toastify/dist/ReactToastify.css';

const Register = function () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '' || confirmPassword === '' || name === '' || cnpj === '') {
      toast.error('Preencha todos os campos');
      return;
    }

    if (!cnpjValidator.isValid(cnpj)) {
      toast.error('CNPJ inválido');
      return;
    }

    if (password.length < 6) {
      toast.error('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('As senhas não conferem');
      return;
    }

    (async () => {
      try {
        await axios.post('/company/create', {
          name,
          email,
          cnpj: cnpjValidator.strip(cnpj),
          password
        });
        window.location.href = '/';
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Title className="mb-3">Registrar minha empresa</S.Title>
          <B.Form onSubmit={handleSubmit}>
            <B.Form.Group className="mb-1">
              <S.Label htmlFor="email">Nome</S.Label>
              <S.Input
                type="text"
                name="name"
                placeholder="Minha Empresa"
                onChange={(e) => setName(e.target.value)}
              />
            </B.Form.Group>
            <B.Form.Group className="mb-1">
              <S.Label htmlFor="email">E-mail</S.Label>
              <S.Input
                type="email"
                name="email"
                placeholder="minhaempresa@empresa.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </B.Form.Group>
            <B.Form.Group className="mb-1">
              <S.Label htmlFor="cnpj">CNPJ</S.Label>
              <S.Input
                type="text"
                name="cnpj"
                placeholder="63025530000104"
                onChange={(e) => setCnpj(e.target.value)}
              />
            </B.Form.Group>
            <B.Form.Group className="mb-1">
              <S.Label htmlFor="password">Senha</S.Label>
              <S.Input
                type="password"
                name="password"
                placeholder="**********"
                onChange={(e) => setPassword(e.target.value)}
              />
              <S.Text>A senha deve ter no mínimo 6 caracteres</S.Text>
            </B.Form.Group>
            <B.Form.Group className="mb-4">
              <S.Label htmlFor="cnpj">Repetir senha</S.Label>
              <S.Input
                type="password"
                name="pasword"
                placeholder="**********"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </B.Form.Group>
            <S.Submit type="submit" as={B.Button} variant="primary" className="w-100">
              Registrar
            </S.Submit>
          </B.Form>
          <S.Employee>
            Empresa já registrada? <Link to="/">Clique aqui</Link>
          </S.Employee>
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

export default Register;
