import { DefaultDashboardWrapper } from '@src/styles/common';
import { Button, Form, Modal } from 'react-bootstrap';
import styled from 'styled-components';

export const Wrapper = styled(DefaultDashboardWrapper)`
  height: 100vh;
  margin: 32px;
  & > button {
    position: fixed;
    top: 32px;
    right: 32px;
    width: 183px !important;
  }
`;

export const Container = styled.div`
  display: flex;
  ul {
    padding: 0 16px;
    height: 100vh;
    flex: 0 0 320px;
    opacity: ${(props) => (props.done ? 0.6 : 1)};
    &:not(:first-child) {
      border-left: 1px solid rgba(0, 0, 0, 0.05);
    }
  }
`;

export const AddTask = styled(Button)`
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30 15px;
  font-size: 18px;
  svg {
    margin-right: 8px;
  }
`;

export const Submit = styled(Button)`
  height: 48px;
  width: 100%;
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

export const IconTaskWrapper = styled.div`
  background-color: rgba(13, 110, 253, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 5px;
  margin-right: 16px;
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

export const ModalInput = styled(Form.Control)``;

export const ModalFooter = styled(Modal.Footer)``;

export const Select = styled(Form.Select)``;

export const Option = styled.option``;
