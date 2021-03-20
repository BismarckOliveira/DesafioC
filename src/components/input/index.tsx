import React, { InputHTMLAttributes } from 'react';
import { Container } from './style';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ children, ...rest }) => {
  return (
    <Container>
      <input {...rest} />
      {children}
      <hr />
    </Container>
  );
};

export default Input;
