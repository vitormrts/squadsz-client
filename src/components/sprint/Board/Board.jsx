import { List } from '@src/components/sprint';
import produce from 'immer';
import { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { MdAdd } from 'react-icons/md';
import { BsListTask } from 'react-icons/bs';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import * as S from './Board.styles';
import { ModalDelete, Presentation } from '../../common';
import { useAuth, useSprint, useSquad } from '../../../hooks';
import api from '../../../services/api';

const Board = function () {
  const { id } = useParams();
  const { isAdmin } = useAuth();
  const { sprint, lists: sprintLists } = useSprint(id);
  const { employees, projects } = useSquad(sprint.id_squad);
  const [lists, setLists] = useState([]);
  const [showModalAddTask, setShowModalAddTask] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [priority, setPriority] = useState('');
  const [project, setProject] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [points, setPoints] = useState(null);

  const priorities = ['Baixa', 'Média', 'Alta', 'Crítica'];

  useEffect(() => {
    setLists(sprintLists);
  }, [sprintLists]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!priority || !project || !description || !name) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    (async () => {
      try {
        await api.post('/task/create', {
          id_sprint: id,
          id_project: project,
          id_stage: 1,
          id_employee: employee === '' ? null : employee,
          priority,
          description,
          name,
          points: points || 0
        });
        toast.success('Tarefa registrada com sucesso');
        setShowModalAddTask(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  };
  const handleOpenModalAddTask = () => {
    setShowModalAddTask(true);
  };

  const handleCloseModalAddTask = () => {
    setShowModalAddTask(false);
  };

  const handleOnDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    const card = lists[source.droppableId].cards[source.index];
    const list = lists[destination.droppableId];

    (async () => {
      try {
        await api.put(`/task/update/${card.id}`, {
          id_stage: list.id
        });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();

    setLists(
      produce(lists, (draft) => {
        const fromList = source.droppableId;
        const toList = destination.droppableId;
        const from = source.index;
        const to = destination.index;
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  };

  const listsMap = lists.map((list, index) => (
    <Droppable droppableId={String(index)} key={String(index)}>
      {(provided, snapshot) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}>
          <List
            name={list.name}
            cards={list.cards}
            creatable={list.creatable}
            done={list.done}
            description={list.description}
            addTask={handleOpenModalAddTask}
          />
        </ul>
      )}
    </Droppable>
  ));

  const employeesMap = employees.map(({ id: employeeId, name: employeeName }) => (
    <S.Option key={employeeId} value={employeeId}>
      {employeeName}
    </S.Option>
  ));

  const prioritiesMap = priorities.map((priorityItem) => (
    <S.Option key={priorityItem} value={priorityItem}>
      {priorityItem}
    </S.Option>
  ));

  const projectsMap = projects.map(({ id: projectId, name: projectName }) => (
    <S.Option key={projectId} value={projectId}>
      {projectName}
    </S.Option>
  ));

  return (
    <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
      <S.Wrapper>
        {isAdmin && <ModalDelete title="sprint" deleteItem="sprint" id={id} />}
        <Presentation
          description={`Objetivo da sprint: ${sprint.goal}`}
          title={`${sprint.squad} - Sprint ${sprint.id}`}
        />
        <S.Container>{lists.length > 0 && listsMap}</S.Container>
      </S.Wrapper>
      <S.AddTask onClick={handleOpenModalAddTask}>
        <MdAdd size={18} color="#FFF" />
        Adicionar tarefa
      </S.AddTask>
      <S.ModalWrapper show={showModalAddTask} onHide={handleCloseModalAddTask} centered>
        <S.ModalHeader closeButton>
          <S.IconTaskWrapper>
            <BsListTask size={24} />
          </S.IconTaskWrapper>
          <S.ModalTitle>Adicionar tarefa</S.ModalTitle>
        </S.ModalHeader>
        <S.ModalBody>
          <S.ModalForm onSubmit={handleOnSubmit}>
            <S.FormGroup>
              <S.Label>Nome da tarefa</S.Label>
              <S.ModalInput
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite aqui..."
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>O que deve ser feito?</S.Label>
              <S.ModalInput
                onChange={(e) => setDescription(e.target.value)}
                as="textarea"
                className="form-control"
                style={{ height: '100px' }}
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Estimativa em pontuação (opcional)</S.Label>
              <S.ModalInput
                onChange={(e) => setPoints(e.target.value)}
                type="number"
                min={0}
                placeholder="0"
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Selecione a prioridade dessa task</S.Label>
              <S.Select onChange={(e) => setPriority(e.target.value)}>
                <S.Option value="" />
                {prioritiesMap}
              </S.Select>
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Selecione o projeto relacionado</S.Label>
              <S.Select onChange={(e) => setProject(e.target.value)}>
                <S.Option value="" />
                {projectsMap}
              </S.Select>
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>Selecione um responsável para a tarefa (opcional)</S.Label>
              <S.Select onChange={(e) => setEmployee(e.target.value)}>
                <S.Option value="" />
                {employeesMap}
              </S.Select>
            </S.FormGroup>
            <S.ModalInput as={S.Submit} type="submit" className="w-100 mt-2 ">
              Criar
            </S.ModalInput>
          </S.ModalForm>
        </S.ModalBody>
      </S.ModalWrapper>
    </DragDropContext>
  );
};

export default Board;
