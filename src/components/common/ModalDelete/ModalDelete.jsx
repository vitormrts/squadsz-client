import { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import * as S from './ModalDelete.styles';

const ModalDelete = function ({ title, deleteItem, id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    (async () => {
      try {
        await api.delete(`/${deleteItem}/delete/${id}`);
        toast.success(
          'Registro deletado com sucesso! Você será redirecionado para a página inicial.'
        );
        setTimeout(() => {
          window.location.href = `/empresa`;
        }, 3000);
      } catch (error) {
        toast.error(error.response.data.message);
      }
      handleClose();
    })();
    handleClose();
  };

  return (
    <>
      <S.Button onClick={handleShow} variant="danger" className="w-25 mt-3 pl-3">
        Excluir
      </S.Button>
      <S.Modal show={show} centered onHide={handleClose}>
        <S.Modal.Header closeButton>
          <S.ModalTitle>Deseja excluir esse {title}?</S.ModalTitle>
        </S.Modal.Header>
        <S.ModalBody>Lembre-se, esse registro não poderá ser restaurado!</S.ModalBody>
        <S.ModalFooter>
          <S.Button onClick={handleClose} variant="primary">
            Cancelar
          </S.Button>
          <S.Button onClick={handleDelete} variant="danger">
            Confirmar
          </S.Button>
        </S.ModalFooter>
      </S.Modal>
    </>
  );
};

export default ModalDelete;
