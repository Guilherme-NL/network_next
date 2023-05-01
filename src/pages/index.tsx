import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser, setAuthUser } from "@/redux/authSlice";
import { useRouter } from "next/router";

import Loading from "@/components/Loader";
import { Container, LoadingComponent, NameBox } from "./styles";
import Button from "@/components/StyledButton";
import Input from "@/components/StyledInput";

export default function Home() {
  const [name, setName] = React.useState("");
  const isSubmitDisabled = name.trim() === "";
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = React.useState<string>("");
  const user = useSelector(selectAuthUser);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setAuthUser(name));
    localStorage.setItem("user", name);
    router.push("/network");
  };

  React.useEffect(() => setUsername(user), [user]);

  React.useEffect(() => {
    const username = localStorage.getItem("user");
    if (username) {
      router.push("network");
    }
  }, []);

  return username ? (
    <LoadingComponent>
      <Loading />
    </LoadingComponent>
  ) : (
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
