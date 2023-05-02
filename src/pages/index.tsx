import Loading from "@/components/Loader";
import Button from "@/components/StyledButton";
import Input from "@/components/StyledInput";
import { useUser } from "@/hooks/useUser";
import { setAuthUser } from "@/redux/authSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { Container, LoadingComponent, NameBox } from "./styles";

export default function Home() {
  const [name, setName] = React.useState("");
  const isSubmitDisabled = name.trim() === "";
  const dispatch = useDispatch();
  const router = useRouter();
  const { userName } = useUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setAuthUser(name));
    localStorage.setItem("user", name);
    router.push("/network");
  };

  if (userName) {
    return (
      <LoadingComponent>
        <Loading />
      </LoadingComponent>
    );
  }

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
