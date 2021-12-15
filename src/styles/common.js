import styled from 'styled-components';

export const DefaultWrapper = styled.div`
  width: 100vw;
`;

export const DefaultDashboardWrapper = styled.div`
  width: 100%;
  padding-left: 240px;
`;

export const DefaultContainer = styled.div`
  padding: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 16px;
  }
`;

export const DefaultImage = styled.img`
  width: 100%;
`;

export const DefaultContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
`;
