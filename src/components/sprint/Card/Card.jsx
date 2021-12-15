import { useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import * as S from './Card.styles';
import { getAvatar } from '../../../utils';
import { useSprint, useSquad } from '../../../hooks';
import api from '../../../services/api';

const Card = function ({
  id,
  name,
  employee,
  employeeId,
  description,
  priority,
  points,
  isDragging
}) {
  const { id: idSprint } = useParams();
  const { sprint } = useSprint(idSprint);
  const { employees } = useSquad(sprint.id_squad);
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [employeeUpdate, setEmployeeUpdate] = useState(employeeId);
  const [priorityUpdate, setPriorityUpdate] = useState(priority);
  const [descriptionUpdate, setDescriptionUpdate] = useState(description);
  const [nameUpdate, setNameUpdate] = useState(name);
  const [pointsUpdate, setPointsUpdate] = useState(points);

  const priorities = ['Baixa', 'Média', 'Alta', 'Crítica'];

  const priorityColors = {
    Baixa: '#FFC107',
    Média: '#FF9800',
    Alta: '#F44336',
    Crítica: '#D32F2F'
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModalDelete = () => {
    handleCloseModal();
    setShowModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!nameUpdate || !descriptionUpdate || !priorityUpdate) {
      toast.error('Preencha todos os campos');
      return;
    }

    (async () => {
      try {
        await api.put(`/task/update/${id}`, {
          name: nameUpdate,
          description: descriptionUpdate,
          points: pointsUpdate || 0,
          priority: priorityUpdate,
          id_employee: employeeUpdate
        });
        toast.success('Tarefa atualizada com sucesso');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        toast.error('Erro ao atualizar tarefa');
      }
    })();
  };

  const handleDelete = () => {
    (async () => {
      try {
        await api.delete(`/task/delete/${id}`);
        toast.success('Registro deletado com sucesso!');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        toast.error(error.response.data.message);
      }
      handleCloseModalDelete();
    })();
    handleCloseModalDelete();
  };

  const employeesMap = employees.map(({ id: idEmployee, name: employeeName }) => (
    <S.Option key={idEmployee} value={idEmployee}>
      {employeeName}
    </S.Option>
  ));

  const prioritiesMap = priorities.map((priorityItem) => (
    <S.Option key={priorityItem} value={priorityItem}>
      {priorityItem}
    </S.Option>
  ));

  return (
    <>
      <S.Container isDragging={isDragging} onClick={handleShowModal}>
        <S.Header>
          <S.Priority color={priorityColors[priority]} title={priority} />
        </S.Header>
        <S.Body>
          <S.Text>{name}</S.Text>
        </S.Body>
        <S.Footer>
          {employee && (
            <S.Profile>
              <S.ImageWrapper>
                <S.Image src={getAvatar(employee)} alt={employee} />
              </S.ImageWrapper>
              <S.Name>{employee}</S.Name>
            </S.Profile>
          )}
          <S.Points title="Pontuação">{points}</S.Points>
        </S.Footer>
      </S.Container>
      <S.ModalWrapper show={showModal} onHide={handleCloseModal} centered>
        <S.ModalHeader closeButton>
          <S.ModalTitle>{name}</S.ModalTitle>
        </S.ModalHeader>
        <S.ModalBody>
          <S.ModalForm onSubmit={handleOnSubmit}>
            <S.FormGroup>
              <S.Label>Nome da tarefa</S.Label>
              <S.Input value={nameUpdate} onChange={(e) => setNameUpdate(e.target.value)} />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>O que deve ser feito?</S.Label>
              <S.Input
                onChange={(e) => setDescriptionUpdate(e.target.value)}
                as="textarea"
                className="form-control"
                style={{ height: '100px' }}
                value={descriptionUpdate}
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Selecione a prioridade dessa task</S.Label>
              <S.Select onChange={(e) => setPriorityUpdate(e.target.value)} value={priorityUpdate}>
                <S.Option value="" />
                {prioritiesMap}
              </S.Select>
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Selecione um responsável para a tarefa (opcional)</S.Label>
              <S.Select onChange={(e) => setEmployeeUpdate(e.target.value)} value={employeeUpdate}>
                <S.Option value="" />
                {employeesMap}
              </S.Select>
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Pontuação</S.Label>
              <S.Input
                type="number"
                onChange={(e) => setPointsUpdate(e.target.value)}
                min={0}
                value={pointsUpdate}
              />
            </S.FormGroup>
            <S.ButtonGroup>
              <S.Input as={S.ModalButton} type="submit" className="w-100 mt-2">
                Editar
              </S.Input>
              <S.Delete variant="danger" className="w-100 mt-2" onClick={handleShowModalDelete}>
                Deletar
              </S.Delete>
            </S.ButtonGroup>
          </S.ModalForm>
        </S.ModalBody>
      </S.ModalWrapper>
      <S.ModalWrapper show={showModalDelete} centered onHide={handleCloseModalDelete}>
        <S.ModalHeader closeButton>
          <S.ModalTitle>Deseja excluir essa tarefa?</S.ModalTitle>
        </S.ModalHeader>
        <S.ModalBody>Lembre-se, esse registro não poderá ser restaurado!</S.ModalBody>
        <S.ModalFooter>
          <S.ModalButton onClick={handleCloseModalDelete} variant="primary">
            Cancelar
          </S.ModalButton>
          <S.ModalButton onClick={handleDelete} variant="danger">
            Confirmar
          </S.ModalButton>
        </S.ModalFooter>
      </S.ModalWrapper>
    </>
  );
};

export default Card;
