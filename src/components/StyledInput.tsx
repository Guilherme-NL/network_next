import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 32px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #777777;
  border-radius: 8px;
  margin: 8px 0 8px 0;
  padding: 8px;
`;
interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
