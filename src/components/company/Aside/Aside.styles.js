import * as B from 'react-bootstrap';
import styled from 'styled-components';

export const Aside = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  background-color: var(--bs-primary);
  height: 100vh;
  width: 240px;
  padding: 46px 24px;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #fff;
  padding-bottom: 24px;
  margin-bottom: 12px;
  img {
    max-width: 180px;
  }
`;

export const Nav = styled(B.Nav)`
  height: 100%;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--bs-white);
    width: 100%;
    height: 100%;
    transition: 0.1s;
    padding: 12px 0;
    margin: 4px 0;
    &:hover {
      color: var(--bs-gray-800);
      svg {
        color: var(--bs-gray-800);
      }
    }
  }
  svg {
    color: var(--bs-white);
    margin-right: 8px;
    width: 24px;
    transition: 0.1s;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid #fff;
  padding-top: 24px;
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 8px;
  width: 64px;
  height: 64px;
`;

export const Avatar = styled.img`
  border-radius: 25%;
`;

export const Dropdown = styled(B.Dropdown)``;

export const DropdownMenu = styled(B.Dropdown.Menu)``;

export const DropdownItem = styled(B.Dropdown.Item)``;

export const DropdownButton = styled(B.Dropdown.Toggle)`
  font-size: 15px;
  color: var(--bs-white);
  font-weight: 700;
  width: 100%;
  white-space: normal;
`;

export const Modal = styled(B.Modal)``;

export const ModalHeader = styled(B.Modal.Header)``;

export const ModalTitle = styled(B.Modal.Title)``;

export const ModalBody = styled(B.Modal.Body)``;

export const ModalFooter = styled(B.Modal.Footer)``;

export const ModalButton = styled(B.Button)``;

export const Form = styled(B.Form)``;

export const FormGroup = styled(B.Form.Group)``;

export const Input = styled(B.Form.Control)``;
