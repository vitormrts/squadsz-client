import { useNavigate } from 'react-router';
import { useEmployees } from '../../../hooks';
import { AddButton, Presentation } from '../../common';
import * as S from './Employees.styles';

const Employees = function () {
  const navigate = useNavigate();
  const { employees } = useEmployees();

  const squadsMap = employees.map(({ id, name, office, gender, squad, email }) => (
    <S.Tr
      key={id}
      onClick={() => {
        navigate(`/funcionarios/${id}`);
      }}>
      <S.Th scope="row">{id}</S.Th>
      <S.Td>{name}</S.Td>
      <S.Td>{office}</S.Td>
      <S.Td>{gender}</S.Td>
      <S.Td>{squad}</S.Td>
      <S.Td>{email}</S.Td>
    </S.Tr>
  ));

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <Presentation
            title="Funcionários"
            description={`Gerencie os seus ${employees.length} funcionarios`}
          />
          <AddButton name="Projeto" />
        </S.Header>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>#</S.Th>
              <S.Th>Nome</S.Th>
              <S.Th>Cargo</S.Th>
              <S.Th>Gênero</S.Th>
              <S.Th>Squad</S.Th>
              <S.Th>E-mail</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>{squadsMap}</S.Tbody>
        </S.Table>
      </S.Container>
    </S.Wrapper>
  );
};

export default Employees;
