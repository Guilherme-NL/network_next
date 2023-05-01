import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "@/redux/authSlice";
import { addPost, selectPosts } from "@/redux/postSlice";

import Input from "@/components/StyledInput";
import Button from "@/components/StyledButton";
import TextArea from "@/components/StyledTextArea";
import { Container } from "./styles";

export default function CreatePosts() {
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const isSubmitDisabled = title.trim() === "" || content.trim() === "";
  const username = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isAddPostLoading = posts.status === "pending";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(addPost({ username, title, content }));
    setTitle("");
    setContent("");
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
        disabled={isAddPostLoading}
      />
      <br />
      <br />
      <p className="input_title">Content</p>
      <TextArea
        placeholder="Content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isAddPostLoading}
      />
      <Button type="submit" disabled={isSubmitDisabled}>
        Create
      </Button>
    </Container>
  );
}
