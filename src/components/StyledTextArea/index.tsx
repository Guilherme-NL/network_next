import React from "react";
import { StyledTextArea } from "./styles";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<TextAreaProps> = (props) => {
  return <StyledTextArea {...props} />;
};

export default TextArea;
