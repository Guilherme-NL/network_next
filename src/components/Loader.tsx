import styled, { keyframes } from "styled-components";

export default function Loading() {
  return <Container />;
}

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #7695ec;
    border-color: #7695ec transparent #7695ec transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
