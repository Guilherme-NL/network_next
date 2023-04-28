import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  height: 74px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #777777;
  border-radius: 8px;
  margin: 8px 0 8px 0;
  padding: 8px;
`;

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<TextAreaProps> = (props) => {
  return <StyledTextArea {...props} />;
};

export default TextArea;
