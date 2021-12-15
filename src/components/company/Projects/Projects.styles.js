import styled from 'styled-components';
import * as B from 'react-bootstrap';
import { DefaultDashboardWrapper, DefaultContainer } from '@src/styles/common';

export const Wrapper = styled(DefaultDashboardWrapper)``;

export const Container = styled(DefaultContainer)``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Table = styled(B.Table)``;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Th = styled.th``;

export const Td = styled.td``;
