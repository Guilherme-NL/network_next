import styled from "styled-components";
import Header from "@/components/Header";
import YourMind from "@/components/YourMind";
import Posts from "@/components/Posts";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  width: 800px;
  background-color: #ffffff;
  padding: 0 24px;
  position: relative;
`;

export default function NetworkPage() {
  return (
    <Container>
      <Content>
        <Header />
        <YourMind />
        <Posts />
      </Content>
    </Container>
  );
}
