import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser, setAuthUser } from "@/redux/authSlice";
import { useRouter } from "next/router";
import axios from "axios";

import Input from "@/components/StyledInput";
import Button from "@/components/StyledButton";
import { wrapper } from "@/redux/store";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const NameBox = styled.form`
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

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const posts = await axios.get("https://dev.codeleap.co.uk/careers/");
      const results = posts.data;
      return {
        props: {
          results,
        },
      };
    }
);

export default function Home({ results }) {
  console.log(results);
  const [name, setName] = React.useState("");
  const isSubmitDisabled = name.trim() === "";
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setAuthUser(name));
    console.log(name);
    localStorage.setItem("user", name);
    router.push("/network");
  };

  return (
    <Container>
      <NameBox onSubmit={handleSubmit}>
        <h1>Welcome to CodeLeap network!</h1>
        <br />
        <br />
        <p className="input_title">Please enter your username</p>
        <Input
          placeholder="John doe"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" disabled={isSubmitDisabled}>
          ENTER
        </Button>
      </NameBox>
    </Container>
  );
}
