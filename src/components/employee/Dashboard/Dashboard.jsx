import { Presentation } from '../../common';
import * as S from './Dashboard.styles';
import { useAuth, useSquad } from '../../../hooks';

const Dashboard = function () {
  const { user } = useAuth();
  const { squad } = useSquad(user.id_squad);

  return (
    <S.Wrapper>
      <S.Container>
        <Presentation title="Dashboard" description={`Seja bem-vindo(a), ${user.name}`} />
        {squad && (
          <S.Text>
            Você cumpre o papel de <strong>{user.office}</strong> e faz parte da squad{' '}
            <strong>{squad.name}</strong>.<br />
          </S.Text>
        )}
        {squad.id_sprint !== undefined && (
          <>
            <S.Text>Caso queira ir para a sprint atual, clique no botão abaixo.</S.Text>
            <S.Button
              onClick={() => {
                window.location.href = `/sprints/${squad.id_sprint}`;
              }}>
              Ir para sprint atual
            </S.Button>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default Dashboard;
