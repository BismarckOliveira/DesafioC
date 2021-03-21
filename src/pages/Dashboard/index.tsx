import React, { useCallback, useState } from 'react';
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
  id: number;
  date: string;
}

interface IConsults {
  list: IPacient[];
}

const Dasboard: React.FC = () => {
  const { signOut, name } = useAuth();
  const [consult, setconsult] = useState<IConsults>();

  const HandleSingOut = useCallback(() => {
    signOut();
  }, [signOut]);

  const ListConsultations = useCallback(async () => {
    const token = localStorage.getItem('@Conexa:token');

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await api.get(`consultations?_expand=${name}`, config);

    setconsult(response.data);
  }, [name]);

  ListConsultations();
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
        {consult?.list.map(consults => (
          <ul key={consults.id}>
            <p>3 consultas agendadas</p>
            <li>
              <Description>
                <strong>{name}</strong>
                <span>{consults.date}</span>
              </Description>
              <Button>Atender</Button>
            </li>
          </ul>
        ))}
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
