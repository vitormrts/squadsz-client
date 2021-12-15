import { useState } from 'react';
import * as B from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Presentation } from '../../common';
import * as S from './Register.styles';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../services/api';
import { useSquads } from '../../../hooks';

const Register = function () {
  const [goal, setGoal] = useState('');
  const [squad, setSquad] = useState('');
  const { squads } = useSquads();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (squad === '' || goal === '') {
      toast.error('Preencha todos os campos');
      return;
    }

    (async () => {
      try {
        await api.post('/sprints/create', {
          goal,
          squad
        });
        toast.success('Sprint registrada com sucesso');
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  };

  const squadsMap = squads.map(({ id, name: squadName }) => (
    <S.Option key={id} value={id}>
      {squadName}
    </S.Option>
  ));

  return (
    <S.Wrapper>
      <S.Container>
        <Presentation title="Registrar Sprint" goal="Registre novas sprints para suas squads" />
        <S.Form onSubmit={handleSubmit}>
          <S.Row>
            <S.Col className="mb-3">
              <S.Label>Objetivo da sprint</S.Label>
              <S.Input
                as="textarea"
                className="form-control"
                onChange={(e) => setGoal(e.target.value)}
                style={{ height: '100px' }}
              />
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Label>Squad</S.Label>
              <S.Select onChange={(e) => setSquad(e.target.value)}>
                <S.Option value="">Selecione um squad</S.Option>
                {squadsMap}
              </S.Select>
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

export default Register;
