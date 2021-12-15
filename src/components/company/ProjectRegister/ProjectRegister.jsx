import { useState } from 'react';
import * as B from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Presentation } from '../../common';
import * as S from './ProjectRegister.styles';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../services/api';
import { useSquads } from '../../../hooks';

const ProjectRegister = function () {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [squad, setSquad] = useState('');
  const { squads } = useSquads();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || description === '') {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    (async () => {
      try {
        await api.post('/projects/create', {
          name,
          description,
          squad
        });
        toast.success('Projeto registrado com sucesso');
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
        <Presentation
          title="Registrar Projeto"
          description="Registre novos projetos para sua empresa"
        />
        <S.Form onSubmit={handleSubmit}>
          <S.Row>
            <S.Col>
              <S.Label>Nome do projeto</S.Label>
              <S.Input type="text" onChange={(e) => setName(e.target.value)} />
            </S.Col>
            <S.Col>
              <S.Label>Descrição</S.Label>
              <S.Input
                as="textarea"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
                style={{ height: '100px' }}
              />
            </S.Col>
          </S.Row>
          <S.Row>
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

export default ProjectRegister;
