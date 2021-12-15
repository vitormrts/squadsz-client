import { useNavigate } from 'react-router';
import { useProjects } from '../../../hooks';
import { parseDate } from '../../../utils';
import { AddButton, Presentation } from '../../common';
import * as S from './Projects.styles';

const Projects = function () {
  const navigate = useNavigate();
  const { projects } = useProjects();

  const squadsMap = projects.map(
    ({ id, name, squad, status, created_at: createdAt, finished_at: finishedAt }) => (
      <S.Tr
        key={id}
        onClick={() => {
          navigate(`/projetos/${id}`);
        }}>
        <S.Th scope="row">{id}</S.Th>
        <S.Td>{name}</S.Td>
        <S.Td>{squad}</S.Td>
        <S.Td>{status}</S.Td>
        <S.Td>{parseDate(createdAt)}</S.Td>
        <S.Td>{parseDate(finishedAt)}</S.Td>
      </S.Tr>
    )
  );

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <Presentation
            title="Projetos"
            description={`Gerencie os seus ${projects.length} projetos`}
          />
          <AddButton name="Projeto" />
        </S.Header>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>#</S.Th>
              <S.Th>Nome</S.Th>
              <S.Th>Squad</S.Th>
              <S.Th>Status</S.Th>
              <S.Th>Criado em</S.Th>
              <S.Th>Terminado em</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>{squadsMap}</S.Tbody>
        </S.Table>
      </S.Container>
    </S.Wrapper>
  );
};

export default Projects;
