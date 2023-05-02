import { selectAuthUser } from "@/redux/authSlice";
import { fetchPosts, selectPosts } from "@/redux/postSlice";
import { AppDispatch } from "@/redux/store";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loader";
import RenderPosts from "../RenderPosts";
import { LoadingComponent, PostsComponent } from "./styles";

export default function Posts() {
  const [username, setUsername] = React.useState("");

  const user = useSelector(selectAuthUser);
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => setUsername(user), [user]);

  function loadPosts() {
    if (posts.status === "pending") return;
    dispatch(fetchPosts());
  }

  const hasMore = posts.data.next !== null;

  return (
    <PostsComponent>
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={loadPosts}
        hasMore={hasMore}
        loader={
          <LoadingComponent key={0}>
            <Loading />
          </LoadingComponent>
        }
      >
        {posts.data.results?.map((post) => {
          const showEditIcons = username === post.username;
          return (
            <div key={post.id}>
              <RenderPosts post={post} showEditIcons={showEditIcons} />
            </div>
          );
        })}
      </InfiniteScroll>
    </PostsComponent>
  );
}
