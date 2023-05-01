import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const NameBox = styled.form`
  width: 500px;
  height: 205px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 16px;
  padding: 25px;

  h1 {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const LoadingComponent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
