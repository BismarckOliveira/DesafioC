import React from 'react';
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

const Dasboard: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <NavBarContent>
          <img src={logo} alt="ConexaLogo" />
          <div>
            <span>Olá Dr Gandalf</span>
            <Button>Sair</Button>
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
        <Button className="ajuda">Ajuda</Button>
        <Button className="novaConsulta">Agendar Consulta</Button>
      </Footer>
    </Container>
  );
};

export default Dasboard;
