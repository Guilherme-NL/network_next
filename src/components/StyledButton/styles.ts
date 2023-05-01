import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
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

  &:disabled {
    opacity: 0.5;
    background-color: gray;
    cursor: not-allowed;
  }
`;
