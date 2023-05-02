import { Data, selectPosts, setPosts } from "@/redux/postSlice";
import { wrapper } from "@/redux/store";

import CreatePosts from "@/components/CreatePosts";
import Header from "@/components/Header";
import Loading from "@/components/Loader";
import Posts from "@/components/Posts";
import { useUser } from "@/hooks/useUser";
import { PostService } from "@/services/PostService";
import { useSelector } from "react-redux";
import { Container, Content, ErrorMessage, LoadingComponent } from "./styles";

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
