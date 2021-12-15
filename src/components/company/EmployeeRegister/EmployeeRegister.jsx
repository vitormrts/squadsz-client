import { useState } from 'react';
import * as B from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Presentation } from '../../common';
import * as S from './EmployeeRegister.styles';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../services/api';
import { useSquads } from '../../../hooks';

const EmployeeRegister = function () {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [squad, setSquad] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [office, setOffice] = useState('');
  const [socialName, setSocialName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { squads } = useSquads();

  const genders = ['Feminino', 'Masculino', 'Não-binário', 'Outro'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === '' ||
      birthDate === '' ||
      email === '' ||
      gender === '' ||
      office === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      toast.error('Preencha todos os campos obrigatórios');
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
        await api.post('/employees/create', {
          name,
          birth_date: birthDate,
          squad,
          email,
          gender,
          office,
          social_name: socialName,
          password
        });

        toast.success('Funcionário registrado com sucesso');
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  };

  const gendersMap = genders.map((item) => (
    <S.Option key={item} value={item}>
      {item}
    </S.Option>
  ));

  const squadsMap = squads.map(({ id, name: squadName }) => (
    <S.Option key={id} value={id}>
      {squadName}
    </S.Option>
  ));

  return (
    <S.Wrapper>
      <S.Container>
        <Presentation
          title="Registrar Funcionário"
          description="Registre novos funcionários para sua empresa"
        />
        <S.Form onSubmit={handleSubmit}>
          <S.Row>
            <S.Col>
              <S.Label>Nome completo</S.Label>
              <S.Input type="text" onChange={(e) => setName(e.target.value)} />
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Label>Data de nascimento</S.Label>
              <S.Input type="date" onChange={(e) => setBirthDate(e.target.value)} />
            </S.Col>
            <S.Col>
              <S.Label>Nome social (opcional)</S.Label>
              <S.Input type="text" onChange={(e) => setSocialName(e.target.value)} />
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Label>E-mail</S.Label>
              <S.Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </S.Col>
            <S.Col>
              <S.Label>Gênero</S.Label>
              <S.Select onChange={(e) => setGender(e.target.value)}>
                <S.Option value="">Selecione um gênero</S.Option>
                {gendersMap}
              </S.Select>
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Label>Cargo</S.Label>
              <S.Input type="text" onChange={(e) => setOffice(e.target.value)} />
            </S.Col>
            <S.Col>
              <S.Label>Squad (opcional)</S.Label>
              <S.Select onChange={(e) => setSquad(e.target.value)}>
                <S.Option value="">Selecione um squad</S.Option>
                {squadsMap}
              </S.Select>
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Label>Senha</S.Label>
              <S.Input type="password" onChange={(e) => setPassword(e.target.value)} />
            </S.Col>
            <S.Col>
              <S.Label>Confirmar senha</S.Label>
              <S.Input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
              <S.Text>A senha deve ter no minimo 6 caracteres</S.Text>
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Input as={B.Button} type="submit" className="w-25 mt-3">
                Registrar
              </S.Input>
            </S.Col>
          </S.Row>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
};

export default EmployeeRegister;
