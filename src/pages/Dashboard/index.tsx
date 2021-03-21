import React, { useEffect, useCallback, useState } from 'react';
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

interface IPacient {
  id: 1;
  first_name: string;
  last_name: string;
}

interface Iconsultations {
  id: number;
  pacient: IPacient;
  date: string;
}

const Dasboard: React.FC = () => {
  const { signOut, name } = useAuth();
  const [consult, setconsult] = useState<Iconsultations[]>([]);

  const HandleSingOut = useCallback(() => {
    signOut();
  }, [signOut]);

  useEffect(() => {
    async function ListConsultations() {
      const token = localStorage.getItem('@Conexa:token');

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await api.get(`consultations?_expand=${name}`, config);
      setconsult(response.data);
    }
    ListConsultations();
  }, []);

  return (
    <Container>
      <NavBar>
        <NavBarContent>
          <img src={logo} alt="ConexaLogo" />
          <div>
            <span>Olá Dr {name}</span>
            <Button onClick={HandleSingOut}>Sair</Button>
          </div>
        </NavBarContent>
      </NavBar>
      <Header>
        <h1>Consultas</h1>
      </Header>
      <Section>
        <ul>
          <p>{consult.length} consultas agendadas</p>
          {consult.map(c => (
            <li key={c.id}>
              <Description>
                <strong>fulano</strong>
                <span>{c.date}</span>
              </Description>
              <Button>Atender</Button>
            </li>
          ))}
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
