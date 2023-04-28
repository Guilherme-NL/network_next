import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

import Input from "@/components/StyledInput";
import Button from "@/components/StyledButton";
import TextArea from "@/components/StyledTextArea";

const Container = styled.form`
  width: 100%;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  padding: 24px;
  margin-top: 104px;
`;

export default function YourMind() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const isSubmitDisabled = title.trim() === "" || content.trim() === "";
  const username = useSelector((state: AppState) => state.user.name);
  console.log(useSelector((state: AppState) => state.user));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const url = "https://dev.codeleap.co.uk/careers/";
    const body = { username, title, content };

    axios
      .post(url, body)
      .then(() => {
        setIsLoading(false);
        setTitle("");
        setContent("");
      })
      .catch((err) => {
        alert(err.response.statusText);
        setIsLoading(false);
        setTitle("");
        setContent("");
      });
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h1>What&apos;s on your mind?</h1>
      <br />
      <br />
      <p className="input_title">Title</p>
      <Input
        placeholder="Hello world"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isLoading}
      />
      <br />
      <br />
      <p className="input_title">Content</p>
      <TextArea
        placeholder="Content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isLoading}
      />
      <Button type="submit" disabled={isSubmitDisabled}>
        Create
      </Button>
    </Container>
  );
}
