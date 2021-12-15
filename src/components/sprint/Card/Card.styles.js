import styled, { css } from 'styled-components';
import { Button, Form, Modal, Card } from 'react-bootstrap';

export const Container = styled(Card)`
  position: relative;
  background: var(--bs-white);
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  font-weight: 500;
  cursor: pointer;
  transform: scale(1);
  transition: 0.2s;
  opacity: 1;
  ${({ isDragging }) =>
    isDragging &&
    css`
      transition: 0.2s;
      opacity: 0.6;
      transform: scale(1.1);
    `}
`;

export const Header = styled.header`
  position: absolute;
  top: -18px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  svg {
    margin-right: 8px;
    width: 32px;
    height: 32px;
  }
`;

export const Body = styled.div``;

export const Priority = styled.span`
  background-color: ${(props) => props.color};
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 2px;
  margin-left: 8px;
`;

export const Text = styled.p`
  margin-bottom: 8px;
  line-height: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 7px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  border-radius: 4px;
  width: 100%;
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--bs-dark);
  line-height: 24px;
  margin-left: 6px;
  opacity: 0.8;
`;

export const Points = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bs-primary);
  margin-left: auto;
  border-radius: 4px;
`;

export const ModalWrapper = styled(Modal)``;

export const ModalHeader = styled(Modal.Header)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    color: var(--bs-primary);
  }
`;

export const ModalForm = styled(Form)``;

export const ModalTitle = styled(Modal.Title)`
  color: var(--bs-primary);
`;

export const ModalBody = styled(Modal.Body)``;

export const FormGroup = styled(Form.Group)`
  margin-bottom: 16px;
`;

export const Label = styled(Form.Label)``;

export const Input = styled(Form.Control)``;

export const ModalFooter = styled(Modal.Footer)``;

export const Select = styled(Form.Select)``;

export const Option = styled.option``;

export const ModalButton = styled(Button)`
  height: 48px;
`;

export const Delete = styled(Button)`
  height: 48px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
