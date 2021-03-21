import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const NavBar = styled.header`
  background: #fffffb;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);

  height: 57px;
`;

export const NavBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  img {
    width: 141px;
    height: 23.26px;
  }

  div {
    display: flex;
    align-items: center;
    button {
      margin-left: 15px;
      width: 57px;
      height: 32px;
      border: 2px solid #2e50d4;
      box-sizing: border-box;
      border-radius: 6px;
      background: #ffffff;
      color: #2e50d4;

      &:hover {
        background: ${shade(0.1, '#ffffff')};
      }
    }
  }

  @media screen and (max-width: 800px) {
    img {
      height: 30px;
    }
    div {
      span {
        display: none;
      }
    }
  }
`;

export const Header = styled.header`
  h1 {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;
    color: #1c307f;
    padding-left: 29px;
    padding-top: 32px;
    margin: 0;
  }
  @media screen and (max-width: 800px) {
    h1 {
      font-size: 28px;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    width: 520px;
    height: 216px;
    p {
      font-size: 16px;
      line-height: 20px;
      color: #575453;
      margin-bottom: 24px;
      font-style: normal;
      font-weight: bold;
    }
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 32px;
      strong {
        font-size: 16px;
        line-height: 20px;
      }

      span {
        font-size: 12px;
        line-height: 20px;
      }

      button {
        width: 75px;
        height: 40px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    ul {
      width: 288px;
      height: 180px;
      padding: 0px;
      margin: 0px;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  position: fixed;
  left: 0px;
  right: 1px;
  bottom: 0px;
  padding: 16px;
  hr {
    display: none;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ajuda {
    width: 75px;
    height: 40px;
    border: 2px solid #2e50d4;
    box-sizing: border-box;
    border-radius: 6px;
    background: #ffffff;
    color: #2e50d4;
    &:hover {
      background: ${shade(0.1, '#ffffff')};
    }
  }

  .novaConsulta {
    width: 154px;
    height: 40px;
  }

  @media screen and (max-width: 800px) {
    hr {
      display: block;
      border: 1px solid #dad2d0;
      box-sizing: border-box;
    }
  }
`;
