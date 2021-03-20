import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BiHelpCircle } from 'react-icons/bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import {
  Container,
  NavBar,
  NavBarContent,
  Section,
  BoxIlustration,
  Content,
  ContentContainer,
  Icon,
} from './style';
import Input from '../../components/input';
import ImgIlustratio from '../../assets/ilustration.png';
import Button from '../../components/button';
import logo from '../../assets/logo-conexa.png';
import { useAuth } from '../../hooks/AuthContext';

const SingIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const history = useHistory();

  const HandleSubmit = useCallback(async () => {
    await signIn({
      email,
      password,
    });

    history.push('/dashboard');
  }, [signIn, history, password, email]);

  return (
    <Container>
      <NavBar>
        <NavBarContent>
          <img src={logo} alt="ConexaLogo" />
        </NavBarContent>
      </NavBar>
      <Section>
        <BoxIlustration>
          <h1>Faça Login</h1>
          <img src={ImgIlustratio} alt="ilustração" />
        </BoxIlustration>
        <ContentContainer>
          <Content>
            <form onSubmit={HandleSubmit}>
              <div>
                <span>E-mail</span>
                <Input
                  defaultValue={email}
                  onChange={e => e.target.value}
                  placeholder="Digite seu e-mail"
                />
              </div>
              <div>
                <span>
                  Senha
                  <BiHelpCircle />
                </span>
                <Input
                  defaultValue={password}
                  onChange={e => e.target.value}
                  type="password"
                  placeholder="Digite sua senha"
                >
                  <Icon>
                    <AiFillEyeInvisible />
                  </Icon>
                </Input>
              </div>
              <Button type="submit">Entrar</Button>
            </form>
          </Content>
        </ContentContainer>
      </Section>
    </Container>
  );
};

export default SingIn;
