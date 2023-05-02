import { Data, selectPosts, setPosts } from "@/redux/postSlice";
import { wrapper } from "@/redux/store";

import CreatePosts from "@/components/CreatePosts";
import Header from "@/components/Header";
import Loading from "@/components/Loader";
import Posts from "@/components/Posts";
import { useUser } from "@/hooks/useUser";
import { PostService } from "@/services/PostService";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  try {
    const posts = await PostService.getInitialPosts();
    const results = posts.data;
    store.dispatch(
      setPosts({
        data: results,
        status: "success",
        limit: 20,
      })
    );
  } catch (e) {
    store.dispatch(
      setPosts({
        data: {} as Data,
        status: "error",
        limit: 20,
      })
    );
  }

  return {
    props: {},
    revalidate: 10,
  };
});

export default function NetworkPage() {
  const posts = useSelector(selectPosts);
  const { userName } = useUser();

  if (!userName) {
    return (
      <LoadingComponent>
        <Loading />
      </LoadingComponent>
    );
  }

  return (
    <Container>
      <Content>
        <Header />
        <CreatePosts />
        {posts.status === "error" ? (
          <ErrorMessage>{posts.errorMessage}</ErrorMessage>
        ) : null}
        <Posts />
      </Content>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 800px;
  height: 100%;
  background-color: #ffffff;
  padding: 0 24px;
  position: relative;
`;

export const LoadingComponent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 0;
`;
