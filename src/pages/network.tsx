import styled from "styled-components";
import Input from "@/components/StyledInput";
import Button from "@/components/StyledButton";

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

const Header = styled.div`
  height: 80px;
  width: 100%;
  background: #7695ec;
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
`;

export default function NetworkPage() {
  return (
    <Container>
      <Content>
        <Header>CodeLeap Network</Header>
        <p>oi</p>
      </Content>
    </Container>
  );
}
