import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { BiHelpCircle } from 'react-icons/bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Form } from '@unform/web';
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
import { useAuth, ISinginCredentials } from '../../hooks/AuthContext';

const SingIn: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const HandleSubmit = useCallback(
    async (data: ISinginCredentials) => {
      await signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/dashboard');
    },
    [signIn, history],
  );

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
            <Form onSubmit={HandleSubmit}>
              <div>
                <span>E-mail</span>
                <Input name="email" placeholder="Digite seu e-mail" />
              </div>
              <div>
                <span>
                  Senha
                  <BiHelpCircle />
                </span>
                <Input
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
                >
                  <Icon>
                    <AiFillEyeInvisible />
                  </Icon>
                </Input>
              </div>
              <Button type="submit">Entrar</Button>
            </Form>
          </Content>
        </ContentContainer>
      </Section>
    </Container>
  );
};

export default SingIn;
