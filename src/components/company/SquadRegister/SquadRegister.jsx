import { useState } from 'react';
import * as B from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Presentation } from '../../common';
import * as S from './SquadRegister.styles';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../services/api';
import { useEmployees } from '../../../hooks';

const SquadRegister = function () {
  const { employees } = useEmployees();
  const [manager, setManager] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      toast.error('Insira um nome para o squad');
      return;
    }
    (async () => {
      try {
        await api.post('/squads/create', {
          name,
          manager
        });

        toast.success('Squad registrado com sucesso');
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  };

  const employeesMap = employees.map(({ id, name: employeeName }) => (
    <S.Option key={id} value={id}>
      {employeeName}
    </S.Option>
  ));

  return (
    <S.Wrapper>
      <S.Container>
        <Presentation title="Registrar Squad" description="Crie novos squads para sua empresa" />
        <S.Form onSubmit={handleSubmit}>
          <S.Row>
            <S.Col>
              <S.Label>Nome do Squad</S.Label>
              <S.Input
                type="text"
                placeholder="Nome do Squad"
                onChange={(e) => setName(e.target.value)}
              />
            </S.Col>
            <S.Col>
              <S.Label>Líder (opcional)</S.Label>
              <S.Select onChange={(e) => setManager(e.target.value)}>
                <S.Option value="">Selecione um líder</S.Option>
                {employeesMap}
              </S.Select>
            </S.Col>
          </S.Row>
          <S.Input as={B.Button} type="submit" className="w-25 mt-3">
            Registrar
          </S.Input>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
};

export default SquadRegister;
