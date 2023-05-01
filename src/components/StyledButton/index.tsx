import React from "react";
import { Container, StyledButton } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Container>
      <StyledButton {...props} />
    </Container>
  );
};

export default Button;
