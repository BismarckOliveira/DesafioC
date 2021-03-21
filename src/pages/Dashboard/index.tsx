import React, { useCallback } from 'react';
import { tokenToString } from 'typescript';
import {
  Container,
  NavBar,
  NavBarContent,
  Header,
  Section,
  Description,
  Footer,
} from './style';
import logo from '../../assets/logo-conexa.png';
import Button from '../../components/button';
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

interface Pacient {
  id: number;
  date: string;
  name: string;
}

const Dasboard: React.FC = () => {
  const { signOut, name } = useAuth();

  const HandleSingOut = useCallback(() => {
    signOut();
  }, [signOut]);

  const ListConsultations = useCallback(async () => {
    const token = localStorage.getItem('@Conexa:token');

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await api.get(`consultations?_expand=${name}`, config);
    console.log(response.data);
  }, [name]);

  ListConsultations();
  return (
    <Container>
      <NavBar>
        <NavBarContent>
          <img src={logo} alt="ConexaLogo" />
          <div>
            <span>Olá Dr Gandalf</span>
            <Button onClick={HandleSingOut}>Sair</Button>
          </div>
        </NavBarContent>
      </NavBar>
      <Header>
        <h1>Consultas</h1>
      </Header>
      <Section>
        <ul>
          <p>3 consultas agendadas</p>
          <li>
            <Description>
              <strong>Pedro Marinho dos Santos</strong>
              <span>10/12/2021 às 10:20</span>
            </Description>
            <Button>Atender</Button>
          </li>
          <li>
            <Description>
              <strong>Pedro Marinho dos Santos</strong>
              <span>10/12/2021 às 10:20</span>
            </Description>
            <Button>Atender</Button>
          </li>
          <li>
            <Description>
              <strong>Pedro Marinho dos Santos</strong>
              <span>10/12/2021 às 10:20</span>
            </Description>
            <Button>Atender</Button>
          </li>
        </ul>
      </Section>
      <Footer>
        <hr />
        <div>
          <Button className="ajuda">Ajuda</Button>
          <Button className="novaConsulta">Agendar Consulta</Button>
        </div>
      </Footer>
    </Container>
  );
};

export default Dasboard;
