import { setPosts } from "@/redux/postSlice";
import { wrapper } from "@/redux/store";
import axios from "axios";

import Header from "@/components/Header";
import CreatePosts from "@/components/CreatePosts";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/redux/authSlice";
import React from "react";
import router from "next/router";
import Loading from "@/components/Loader";
import Posts from "@/components/Posts";
import { Container, Content, LoadingComponent } from "./styles";

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const posts = await axios.get("https://dev.codeleap.co.uk/careers/");
  const results = posts.data;
  store.dispatch(setPosts({ data: results, status: "success" }));
  return {
    props: {},
    revalidate: 10,
  };
});

export default function NetworkPage() {
  const [username, setUsername] = React.useState<string>("");
  const user = useSelector(selectAuthUser);
  React.useEffect(() => setUsername(user), [user]);

  React.useEffect(() => {
    const username = localStorage.getItem("user");
    if (!username) {
      router.push("/");
    }
  }, []);

  return username ? (
    <Container>
      <Content>
        <Header />
        <CreatePosts />
        <Posts />
      </Content>
    </Container>
  ) : (
    <LoadingComponent>
      <Loading />
    </LoadingComponent>
  );
}
