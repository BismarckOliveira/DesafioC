import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './style';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
