import styled from 'styled-components';

export const Container = styled.div`

`;

export const NavBar = styled.header`

background: #FFFFFB;
box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
`;

export const NavBarContent = styled.div`
max-width: 1366px;
padding: 16px;

@media screen and (max-width: 800px){
  display: flex;
  justify-content: center;
  img{
    height: 30px;
  }
}

`;

export const Section = styled.div`
display: flex;

@media screen and (max-width: 800px) {
   flex-direction: column;
   align-items: center;
   
   
   img{
     display: none;
   }
}

`;

export const BoxIlustration  = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 480px;
max-height: 444px;
padding-left: 70px;
padding-top: 60px;


  
 h1{
   font-size: 52px;
   color: #1C307F;
  }

 img{
   flex: 1;
   padding: 50px;
   
 }


 
 @media screen and (max-width: 800px){
   padding: 0px;
   margin-top: 35px;
   margin-bottom: 44px;
   h1{
     flex: 1;
     font-size: 42px;
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
  max-width: 746px;
  
  form { 
    
    span {
      display: flex;
      align-items: center;
      
      svg{
        padding-left: 5px;
        color: #999392;
      }
    }

    > div{
        margin-top: 32px;
      }

      button{
        border: none;
        background: none;
        font-size: 16px;
        color: #999392;
      }
    }

   > Button {
      margin-top: 68px;
      color: #ffffff;
      
    }

    @media screen and (max-width: 800px){
    form {
      margin-top: 5px;
    }
    > button{
      margin-top: 40px;
    }
    
  }

`;

