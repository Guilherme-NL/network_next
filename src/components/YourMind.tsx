import styled from "styled-components";
import Input from "@/components/StyledInput";
import Button from "@/components/StyledButton";
import TextArea from "@/components/StyledTextArea";

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  padding: 24px;
  margin-top: 104px;
`;

export default function YourMind() {
  return (
    <Container>
      <h1>What&apos;s on your mind?</h1>
      <br />
      <br />
      <p className="input_title">Title</p>
      <Input placeholder="Hello world" />
      <br />
      <br />
      <p className="input_title">Content</p>
      <TextArea placeholder="Content here" />
      <Button>Create</Button>
    </Container>
  );
}
