import { Link } from 'react-router-dom';
import { IoMdAddCircle } from 'react-icons/io';
import * as S from './AddButton.styles';

const AddButton = function ({ name }) {
  return (
    <Link to="registrar">
      <S.Button>
        <IoMdAddCircle size={24} />
        Adicionar {name}
      </S.Button>
    </Link>
  );
};

export default AddButton;
