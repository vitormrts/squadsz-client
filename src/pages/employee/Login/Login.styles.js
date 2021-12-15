import styled from 'styled-components';
import { DefaultWrapper, DefaultContainer, DefaultContent } from '@styles/common';
import * as B from 'react-bootstrap';

export const Wrapper = styled(DefaultWrapper)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(DefaultContainer)`
  width: 100%;
`;

export const Content = styled(DefaultContent)`
  max-width: 660px;
`;

export const Title = styled.h2``;

export const Label = styled(B.Form.Label)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.silverChalice};
  font-size: 14px;
`;

export const Input = styled(B.Form.Control)``;

export const Submit = styled(B.Form.Control)`
  padding-top: 16px;
  padding-bottom: 16px;
  font-weight: 700;
  font-size: 20px;
`;

export const Company = styled.p`
  margin-top: 16px;
`;

export const Separator = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  margin: 24px 0;
  color: ${({ theme }) => theme.colors.silverChalice};
  &:before {
    content: '';
    height: 1px;
    flex: 1;
    margin-right: 16px;
    background: ${({ theme }) => theme.colors.silverChalice};
  }
  &:after {
    content: '';
    height: 1px;
    flex: 1;
    margin-left: 16px;
    background: ${({ theme }) => theme.colors.silverChalice};
  }
`;
