import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  background: #7695ec;
  border-radius: 8px;
  height: 32px;
  width: 111px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  margin: 8px 0 8px 0;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1d3f8c;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Container>
      <StyledButton {...props} />
    </Container>
  );
};

export default Button;
