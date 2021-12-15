import { Draggable } from 'react-beautiful-dnd';
import { MdAdd } from 'react-icons/md';
import Card from '../Card';
import * as S from './List.styles';

const List = function ({ name, cards, creatable, done, description, addTask }) {
  const cardsMap = cards.map((card, index) => (
    <Draggable key={card.id} draggableId={String(card.id)} index={index}>
      {(provided, snapshot) => (
        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Card
            id={card.id}
            name={card.name}
            employee={card.employee}
            priority={card.priority}
            points={card.points}
            isDragging={snapshot.isDragging}
            description={card.description}
            employeeId={card.id_employee}
          />
        </li>
      )}
    </Draggable>
  ));

  return (
    <S.Container done={done}>
      <S.Header>
        <S.Title>
          {name}
          <S.Length>{cards.length}</S.Length>
        </S.Title>
        {creatable && (
          <S.AddButton type="button" onClick={addTask}>
            <MdAdd size={24} color="#FFF" />
          </S.AddButton>
        )}
      </S.Header>
      <S.Cards>{cardsMap}</S.Cards>
      <S.Footer>
        <S.Small>{description}</S.Small>
      </S.Footer>
    </S.Container>
  );
};

export default List;
