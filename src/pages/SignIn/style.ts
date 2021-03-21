import styled from 'styled-components';

export const Container = styled.div``;

export const NavBar = styled.header`
  background: #fffffb;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
  height: 57px;
`;

export const NavBarContent = styled.div`
  padding: 16px;

  img {
    width: 141px;
    height: 23.26px;
  }
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

export const Section = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    img {
      display: none;
    }
  }
`;

export const BoxIlustration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 480px;
  height: 100%;
  margin: 60px 0px 64px 70px;

  h1 {
    font-size: 52px;
    color: #1c307f;
    margin-bottom: 67px;
  }

  img {
    flex: 1;
  }

  @media screen and (max-width: 800px) {
    padding: 0px;
    margin-top: 35px;
    margin-bottom: 44px;
    margin-left: 0;
    height: auto;
    width: auto;
    h1 {
      flex: 1;
      font-size: 32px;
    }
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  form {
    span {
      display: flex;
      align-items: center;

      svg {
        padding-left: 5px;
        color: #999392;
      }
    }

    > div {
      margin-top: 32px;
    }

    > Button {
      margin-top: 68px;
      color: #ffffff;
    }

    @media screen and (max-width: 800px) {
      form {
        margin-top: 5px;
      }
      > button {
        margin-top: 40px;
      }
    }
  }
`;

export const Icon = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  color: #999392;
`;
