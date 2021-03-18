import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`

height: 40px;
width: 235px;
border-radius: 5px;
border: none;
background: #2E50D4;
color: #ffff;
transition: background-color 0.2s;

&:hover{
  background: ${shade(0.2,'#2E50D4')};
}

`;

