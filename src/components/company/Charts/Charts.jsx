import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { interpolateRainbow } from 'd3-scale-chromatic';
import { Presentation } from '../../common';
import { interpolateColors } from '../../../utils';
import * as S from './Charts.styles';
import { useEmployees, useSquads, useProjects, useSprints } from '../../../hooks';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Charts = function () {
  const { squads } = useSquads();
  const { employees } = useEmployees();
  const { projects } = useProjects();
  const { sprints } = useSprints();

  const genders = ['Feminino', 'Masculino', 'Não-binário', 'Outro'];
  const statusOptions = ['para fazer', 'em progresso', 'feito'];

  const colorRangeInfo = {
    colorStart: 0.2,
    colorEnd: 1,
    useEndAsStart: false
  };

  const squadsColors = interpolateColors({
    dataLength: squads.length,
    colorScale: interpolateRainbow,
    colorRangeInfo
  });

  const employeesColors = interpolateColors({
    dataLength: employees.length,
    colorScale: interpolateRainbow,
    colorRangeInfo
  });

  const projectsColors = interpolateColors({
    dataLength: projects.length,
    colorScale: interpolateRainbow,
    colorRangeInfo
  });

  return (
    <S.Wrapper>
      <S.Container>
        <Presentation title="Dashboard" description="Acompanhe a sua empresa" />
        <S.Header>
          <S.Card>{employees.length} funcionários</S.Card>
          <S.Card>{squads.length} squads</S.Card>
          <S.Card>{projects.length} projetos</S.Card>
          <S.Card>{sprints.length} sprints</S.Card>
        </S.Header>
        <S.Charts>
          <S.ChartWrapper>
            <Doughnut
              data={{
                labels: squads.map(({ name }) => name),
                datasets: [
                  {
                    label: 'Squads',
                    data: squads.map((squad) => squad.employees),
                    backgroundColor: squadsColors,
                    borderColor: squadsColors
                  }
                ]
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: 'Funcionários por squad'
                  }
                }
              }}
            />
          </S.ChartWrapper>
          <S.ChartWrapper>
            <Doughnut
              data={{
                labels: genders.map((gender) => gender),
                datasets: [
                  {
                    label: 'Funcionários',
                    data: genders.map(
                      (gender) =>
                        employees.filter(({ gender: employeeGender }) => employeeGender === gender)
                          .length
                    ),
                    backgroundColor: employeesColors,
                    borderColor: employeesColors
                  }
                ]
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: 'Funcionários por gênero'
                  }
                }
              }}
            />
          </S.ChartWrapper>
          <S.ChartWrapper>
            <Doughnut
              data={{
                labels: statusOptions.map((status) => status),
                datasets: [
                  {
                    label: 'Projetos',
                    data: statusOptions.map(
                      (status) =>
                        projects.filter(({ status: projectStatus }) => projectStatus === status)
                          .length
                    ),
                    backgroundColor: projectsColors,
                    borderColor: projectsColors
                  }
                ]
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: 'Projetos por status'
                  }
                }
              }}
            />
          </S.ChartWrapper>
          <S.ChartWrapper>
            <Doughnut
              data={{
                labels: squads.map(({ name }) => name),
                datasets: [
                  {
                    label: 'Squads',
                    data: squads.map(
                      ({ id }) => projects.filter(({ id_squad: idSquad }) => idSquad === id).length
                    ),
                    backgroundColor: squadsColors,
                    borderColor: squadsColors
                  }
                ]
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: 'Projetos por squad'
                  }
                }
              }}
            />
          </S.ChartWrapper>
        </S.Charts>
      </S.Container>
    </S.Wrapper>
  );
};

export default Charts;
