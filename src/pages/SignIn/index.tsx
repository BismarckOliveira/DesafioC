import React from 'react';
import { Container , NavBar , NavBarContent , Section , BoxIlustration, Content , ContentContainer} from './style'
import Input from '../../components/input';
import ImgIlustratio from '../../assets/ilustration.png';
import { BiHelpCircle } from 'react-icons/bi';
import {AiFillEyeInvisible} from 'react-icons/ai';
import Button from '../../components/button';
import logo from '../../assets/logo-conexa.png'

const SingIn: React.FC = () => {
  return (
  <Container>
    <NavBar>
      <NavBarContent>
        <img src={logo} alt="ConexaLogo"/>
        </NavBarContent> 
    </NavBar>
    <Section>
      <BoxIlustration>
      <h1>Faça Login</h1>
      <img src={ImgIlustratio} alt="ilustração"/>
      </BoxIlustration>
      <ContentContainer>
        <Content>
          <form action="onsubmit">
            <div>
              <span>E-mail</span>
              <Input placeholder="Digite seu e-mail" />  
            </div>
            <div>
              <span>Senha <BiHelpCircle/></span>
                <Input 
                type="password" 
                placeholder="Digite sua senha"
                >
                  <button>
                    <AiFillEyeInvisible/>
                  </button>
                </Input>   
            </div>
          </form>
          <Button>
            Entrar
          </Button>
        </Content>
      </ContentContainer>
    </Section>
  </Container>)
}

export default SingIn;
