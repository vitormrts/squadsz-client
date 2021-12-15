import { Link } from 'react-router-dom';
import { FaProjectDiagram, FaIdBadge } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { MdDashboard } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { cnpj as cnpjValidator } from 'cpf-cnpj-validator';
import { GiSprint } from 'react-icons/gi';
import * as S from './Aside.styles';
import { Logo } from '../../common';
import { useAuth } from '../../../hooks';
import api from '../../../services/api';
import getAvatar from '../../../utils/getAvatar/getAvatar';

const Aside = function () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const { handleLogout, user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      setName(user.name);
      setEmail(user.email);
      setCnpj(user.cnpj);
    }
  }, [user]);

  const handleModalOpen = () => {
    setName(user.name);
    setEmail(user.email);
    setCnpj(user.cnpj);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleEditProfile = () => {
    if (name === '' || email === '' || cnpj === '') {
      toast.error('Preencha todos os campos para editar o perfil');
      return;
    }

    if (!cnpjValidator.isValid(cnpj)) {
      toast.error('CNPJ inválido');
      return;
    }

    if (cnpj)
      (async () => {
        try {
          await api.put('/company/update', {
            name,
            email,
            cnpj: cnpjValidator.strip(cnpj)
          });
          toast.success(
            'Perfil atualizado com sucesso! Você será redirecionado para a página inicial para os dados serem atualizados.'
          );
          setTimeout(() => {
            handleLogout();
          }, 5000);
          handleModalClose();
        } catch (error) {
          toast.error(error.response.data.message);
        }
      })();
  };

  return (
    <S.Aside>
      <S.Header>
        <Logo />
      </S.Header>
      <S.List>
        <S.Item>
          <Link to="/empresa">
            <MdDashboard />
            Dashboard
          </Link>
        </S.Item>
        <S.Item>
          <Link to="/sprints">
            <GiSprint />
            Sprints
          </Link>
        </S.Item>
        <S.Item>
          <Link to="/squads">
            <RiTeamFill />
            Squads
          </Link>
        </S.Item>
        <S.Item>
          <Link to="/funcionarios">
            <FaIdBadge />
            Funcionários
          </Link>
        </S.Item>
        <S.Item>
          <Link to="/projetos">
            <FaProjectDiagram />
            Projetos
          </Link>
        </S.Item>
      </S.List>
      <S.Footer>
        <S.Profile>
          <S.Avatar src={getAvatar(name)} />
        </S.Profile>
        <S.Dropdown>
          <S.DropdownButton>Bem vindo(a), {name.split(' ')[0] || ''}!</S.DropdownButton>
          <S.DropdownMenu>
            <S.ModalButton as={S.DropdownItem} onClick={handleModalOpen} variant="danger">
              Editar meu perfil
            </S.ModalButton>
            <S.Modal show={modalOpen} onHide={handleModalClose} centered>
              <S.Modal.Header closeButton>
                <S.ModalTitle>Editar meu perfil</S.ModalTitle>
              </S.Modal.Header>
              <S.ModalBody>
                <S.Form>
                  <S.Form.Group>
                    <S.Form.Label>Nome</S.Form.Label>
                    <S.Form.Control
                      type="text"
                      placeholder="Nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </S.Form.Group>
                  <S.Form.Group>
                    <S.Form.Label>E-mail</S.Form.Label>
                    <S.Form.Control
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </S.Form.Group>
                  <S.Form.Group>
                    <S.Form.Label>CNPJ</S.Form.Label>
                    <S.Form.Control
                      type="text"
                      placeholder="CNPJ"
                      value={cnpj}
                      onChange={(e) => setCnpj(e.target.value)}
                    />
                  </S.Form.Group>
                </S.Form>
              </S.ModalBody>
              <S.ModalFooter>
                <S.ModalButton onClick={handleModalClose} variant="primary">
                  Cancelar
                </S.ModalButton>
                <S.ModalButton onClick={handleEditProfile} variant="success">
                  Confirmar
                </S.ModalButton>
              </S.ModalFooter>
            </S.Modal>
            <S.DropdownItem onClick={handleLogout}>Sair</S.DropdownItem>
          </S.DropdownMenu>
        </S.Dropdown>
      </S.Footer>
    </S.Aside>
  );
};

export default Aside;
