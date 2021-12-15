import styled from 'styled-components';
import { DefaultDashboardWrapper, DefaultContainer } from '@src/styles/common';

export const Wrapper = styled(DefaultDashboardWrapper)``;

export const Container = styled(DefaultContainer)`
  canvas {
    width: 50vw;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 4rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  background-color: var(--bs-primary);
  color: var(--bs-white);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

export const Charts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 32px;
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  width: 350px;
  height: 350px;
`;
