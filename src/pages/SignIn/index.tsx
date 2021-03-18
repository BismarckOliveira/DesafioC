import React, { useContext } from 'react';
import { 
  Container, 
  NavBar, 
  NavBarContent, 
  Section, 
  BoxIlustration, 
  Content, 
  ContentContainer,
  Icon } from './style'
import Input from '../../components/input';
import ImgIlustratio from '../../assets/ilustration.png';
import { BiHelpCircle } from 'react-icons/bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import Button from '../../components/button';
import logo from '../../assets/logo-conexa.png'
import { AuthContext } from '../../context/AuthContext'

const SingIn: React.FC = () => {

  const { signIn } = useContext(AuthContext);

  const handleSubmit = () => {
    console.log(signIn);
  }


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
            <form onSubmit={handleSubmit}>
              <div>
                <span>E-mail</span>
                <Input placeholder="Digite seu e-mail" />
              </div>
              <div>
                <span>
                  Senha
                <BiHelpCircle />
                </span>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                >
                  <Icon>
                    <AiFillEyeInvisible />
                  </Icon>
                </Input>
              </div>
              <Button type='submit'>
                Entrar
             </Button>
            </form>

          </Content>
        </ContentContainer>
      </Section>
    </Container>)
}

export default SingIn;
