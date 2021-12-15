import { useEffect, useState } from 'react';
import * as B from 'react-bootstrap';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { ModalDelete, Presentation } from '../../common';
import * as S from './EmployeeUpdate.styles';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../services/api';
import { useEmployee, useSquads } from '../../../hooks';
import { parseDate } from '../../../utils';

const EmployeeUpdate = function () {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [squad, setSquad] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [office, setOffice] = useState('');
  const [socialName, setSocialName] = useState('');
  const { employee } = useEmployee(id);
  const { squads } = useSquads();

  const genders = ['Feminino', 'Masculino', 'Não-binário', 'Outro'];

  useEffect(() => {
    setName(employee.name);
    setBirthDate(employee.birth_date);
    setSquad(employee.id_squad);
    setEmail(employee.email);
    setGender(employee.gender);
    setOffice(employee.office);
    setSocialName(employee.social_name);
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || birthDate === '' || email === '' || gender === '' || office === '') {
      toast.error('Preencha os campos obrigatórios.');
      return;
    }
    (async () => {
      try {
        await api.put(`/employee/update/${id}`, {
          name,
          email,
          gender,
          office,
          social_name: socialName,
          squad
        });

        toast.success('Funcionário atualizado com sucesso');
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

  const squadsMap = squads.map(({ id: squadId, name: squadName }) => (
    <S.Option key={squadId} value={squadId}>
      {squadName}
    </S.Option>
  ));

  return (
    <S.Wrapper>
      <S.Container>
        <Presentation
          title={`Editar funcionário - ${employee.name}`}
          description="Registre novos funcionários para sua empresa"
        />
        <S.Form onSubmit={handleSubmit}>
          <S.Row>
            <S.Col>
              <S.Label>Nome completo</S.Label>
              <S.Input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Label>Data de nascimento</S.Label>
              <S.Input value={parseDate(birthDate)} disabled />
            </S.Col>
            <S.Col>
              <S.Label>Nome social (opcional)</S.Label>
              <S.Input
                type="text"
                onChange={(e) => setSocialName(e.target.value)}
                value={socialName}
              />
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Label>E-mail</S.Label>
              <S.Input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </S.Col>
            <S.Col>
              <S.Label>Gênero</S.Label>
              <S.Select onChange={(e) => setGender(e.target.value)} value={gender}>
                <S.Option value="">Selecione um gênero</S.Option>
                {gendersMap}
              </S.Select>
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Label>Cargo</S.Label>
              <S.Input type="text" onChange={(e) => setOffice(e.target.value)} value={office} />
            </S.Col>
            <S.Col>
              <S.Label>Squad (opcional)</S.Label>
              <S.Select onChange={(e) => setSquad(e.target.value)} value={squad}>
                <S.Option value="">Selecione um squad</S.Option>
                {squadsMap}
              </S.Select>
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Input as={B.Button} type="submit" className="w-25 mt-3">
                Editar
              </S.Input>
              <ModalDelete title="funcionário" deleteItem="employee" id={id} />
            </S.Col>
          </S.Row>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
};

export default EmployeeUpdate;
