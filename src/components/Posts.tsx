import styled from "styled-components";
import React from "react";
import { selectAuthUser } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectPosts } from "@/redux/postSlice";
import RenderPosts from "./RenderPosts";
import InfiniteScroll from "react-infinite-scroller";

export default function Posts() {
  const [username, setUsername] = React.useState<string>("");
  const user = useSelector(selectAuthUser);
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  const [limit, setLimit] = React.useState(0);
  const [hasMore, setHasMore] = React.useState(true);
  const [isFetchPostsLoading, setIsFetchPostsLoading] = React.useState(false);

  React.useEffect(() => setUsername(user), [user]);

  async function loadPosts() {
    if (isFetchPostsLoading) return;

    setIsFetchPostsLoading(true);
    //@ts-ignore
    const posts = await dispatch(fetchPosts(limit));
    if (posts.payload.data.next === null) {
      setHasMore(false);
      return;
    }
    setLimit(limit + 10);
    setIsFetchPostsLoading(false);
  }

  return (
    <PostsComponent>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadPosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {posts.data.results?.map((post) => {
          const showEditIcons = username === post.username;
          return (
            <RenderPosts
              key={post.id}
              post={post}
              showEditIcons={showEditIcons}
            />
          );
        })}
      </InfiniteScroll>
    </PostsComponent>
  );
}

const PostsComponent = styled.div`
  margin-bottom: 200px;
`;
