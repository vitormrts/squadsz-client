import { useEffect, useState } from 'react';
import * as B from 'react-bootstrap';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { ModalDelete, Presentation } from '../../common';
import * as S from './SquadUpdate.styles';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../services/api';
import { useEmployees, useSquad } from '../../../hooks';

const SquadUpdate = function () {
  const { id } = useParams();
  const [manager, setManager] = useState('');
  const [name, setName] = useState('');
  const { squad } = useSquad(id);
  const { employees } = useEmployees();

  useEffect(() => {
    setName(squad.name);
    setManager(squad.id_manager_employee);
  }, [squad]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      toast.error('Insira um nome para o squad');
      return;
    }
    (async () => {
      try {
        await api.put(`/squad/update/${id}`, {
          name,
          manager
        });

        toast.success('Squad atualizado com sucesso');
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  };

  const employeesMap = employees.map(({ id: employeeId, name: employeeName }) => (
    <S.Option key={employeeId} value={employeeId}>
      {employeeName}
    </S.Option>
  ));

  return (
    <S.Wrapper>
      <S.Container>
        <Presentation
          title={`Editar Squad - ${squad.name}`}
          description="Atualize as informações do squad"
        />
        <S.Form onSubmit={handleSubmit}>
          <S.Row>
            <S.Col>
              <S.Label>Nome do Squad</S.Label>
              <S.Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </S.Col>
            <S.Col>
              <S.Label>Líder (opcional)</S.Label>
              <S.Select onChange={(e) => setManager(e.target.value)} value={manager}>
                <S.Option value="">Selecione um líder</S.Option>
                {employeesMap}
              </S.Select>
            </S.Col>
          </S.Row>
          <S.Input as={B.Button} type="submit" className="w-25 mt-3">
            Editar
          </S.Input>
          <ModalDelete title="squad" deleteItem="squad" id={id} />
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
};

export default SquadUpdate;
