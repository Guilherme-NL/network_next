import styled from "styled-components";
import Input from "@/components/StyledInput";
import Button from "@/components/StyledButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const NameBox = styled.div`
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

export default function Home() {
  return (
    <Container>
      <NameBox>
        <h1>Welcome to CodeLeap network!</h1>
        <br />
        <br />
        <p className="input_title">Please enter your username</p>
        <Input placeholder="John doe" />
        <Button>ENTER</Button>
      </NameBox>
    </Container>
  );
}
