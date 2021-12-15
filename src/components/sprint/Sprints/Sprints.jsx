import { useNavigate } from 'react-router';
import { useSprints } from '../../../hooks';
import { parseDate } from '../../../utils';
import { AddButton, Presentation } from '../../common';
import * as S from './Sprints.styles';

const Sprints = function () {
  const { sprints } = useSprints();
  const navigate = useNavigate();

  const sprintsMap = sprints.map(
    ({ id, squad, created_at: createdAt, finished_at: finishedAt, goal }) => (
      <S.Tr
        key={id}
        onClick={() => {
          navigate(`/sprints/${id}`);
        }}>
        <S.Th scope="row">{id}</S.Th>
        <S.Td>{squad}</S.Td>
        <S.Td>{goal}</S.Td>
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
            title="Sprints"
            description={`Gerencie as suas ${sprints.length} sprints ativas`}
          />
          <AddButton name="Sprint" />
        </S.Header>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>#</S.Th>
              <S.Th>Squad</S.Th>
              <S.Th>Objetivo</S.Th>
              <S.Th>Criada em</S.Th>
              <S.Th>Terminada em</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>{sprintsMap}</S.Tbody>
        </S.Table>
      </S.Container>
    </S.Wrapper>
  );
};

export default Sprints;
