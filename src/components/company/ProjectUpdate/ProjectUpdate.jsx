import { useEffect, useState } from 'react';
import * as B from 'react-bootstrap';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { ModalDelete, Presentation } from '../../common';
import * as S from './ProjectUpdate.styles';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../services/api';
import { useSquads, useProject } from '../../../hooks';

const ProjectUpdate = function () {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [squad, setSquad] = useState({});
  const { squads } = useSquads();
  const { project } = useProject(id);

  const statusOptions = ['para fazer', 'em progresso', 'feito'];

  useEffect(() => {
    setName(project.name);
    setStatus(project.status);
    setDescription(project.description);
    setSquad(project.id_squad);
  }, [project]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || description === '' || status === '') {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }
    (async () => {
      try {
        await api.put(`/project/update/${id}`, {
          name,
          description,
          squad,
          status
        });

        toast.success('Projeto atualizado com sucesso');
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  };

  const squadsMap = squads.map(({ id: squadId, name: squadName }) => (
    <S.Option key={squadId} value={squadId}>
      {squadName}
    </S.Option>
  ));

  const statusMap = statusOptions.map((statusOption) => (
    <S.Option key={statusOption} value={statusOption}>
      {statusOption}
    </S.Option>
  ));

  return (
    <S.Wrapper>
      <S.Container>
        <Presentation
          title={`Editar Projeto - ${project.name}`}
          description="Atualize as informações do projeto"
        />
        <S.Form onSubmit={handleSubmit}>
          <S.Row>
            <S.Col>
              <S.Label>Nome do projeto</S.Label>
              <S.Input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </S.Col>
            <S.Col>
              <S.Label>Descrição</S.Label>
              <S.Input
                as="textarea"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                style={{ height: '100px' }}
              />
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Label>Squad (opcional)</S.Label>
              <S.Select onChange={(e) => setSquad(e.target.value)} value={squad}>
                <S.Option value="">Selecione um squad</S.Option>
                {squadsMap}
              </S.Select>
            </S.Col>
            <S.Col>
              <S.Label>Status</S.Label>
              <S.Select onChange={(e) => setStatus(e.target.value)} value={status}>
                <S.Option value="">Selecione um status</S.Option>
                {statusMap}
              </S.Select>
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Input as={B.Button} type="submit" className="w-25 mt-3">
                Editar
              </S.Input>
              <ModalDelete title="projeto" deleteItem="project" id={id} />
            </S.Col>
          </S.Row>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
};

export default ProjectUpdate;
