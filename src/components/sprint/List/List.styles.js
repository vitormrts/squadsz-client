import styled, { css } from 'styled-components';
import { Button } from 'react-bootstrap';

export const Container = styled.div`
  padding-bottom: 42px;
  ${({ done }) =>
    done &&
    css`
      opacity: 0.6;
    `}
  li {
    margin-bottom: 10px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 16px;
  padding: 0 10px;
  margin: 0;
`;

export const AddButton = styled(Button)`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 0;
  background-color: var(--bs-primary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Length = styled.span`
  margin-left: 8px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 3px;
`;

export const Cards = styled.div`
  list-style: none;
  margin-top: 32px;
`;

export const Footer = styled.footer``;

export const Small = styled.small`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  display: inline-block;
  margin-top: 16px;
`;
