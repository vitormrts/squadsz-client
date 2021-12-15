import { useNavigate } from 'react-router';
import { useSquads } from '../../../hooks';
import { AddButton, Presentation } from '../../common';
import * as S from './Squads.styles';

const Squads = function () {
  const navigate = useNavigate();
  const { squads } = useSquads();

  const squadsMap = squads.map(({ id, name, manager, employees, projects }) => (
    <S.Tr
      key={id}
      onClick={() => {
        navigate(`/squads/${id}`);
      }}>
      <S.Th scope="row">{id}</S.Th>
      <S.Td>{name}</S.Td>
      <S.Td>{manager}</S.Td>
      <S.Td>{employees}</S.Td>
      <S.Td>{projects}</S.Td>
    </S.Tr>
  ));

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <Presentation title="Squads" description={`Gerencie os seus ${squads.length} squads`} />
          <AddButton name="Squad" />
        </S.Header>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>#</S.Th>
              <S.Th>Nome</S.Th>
              <S.Th>Líder</S.Th>
              <S.Th>Membros</S.Th>
              <S.Th>Projetos</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>{squadsMap}</S.Tbody>
        </S.Table>
      </S.Container>
    </S.Wrapper>
  );
};

export default Squads;
