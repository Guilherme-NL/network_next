import styled from "styled-components";
import Input from "@/components/StyledInput";
import Button from "@/components/StyledButton";
import Header from "@/components/Header";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  width: 800px;
  background-color: #ffffff;
`;

export default function NetworkPage() {
  return (
    <Container>
      <Content>
        <Header />
        <p>oi</p>
      </Content>
    </Container>
  );
}
