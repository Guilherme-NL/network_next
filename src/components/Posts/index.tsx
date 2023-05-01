import React from "react";
import { selectAuthUser } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectPosts } from "@/redux/postSlice";
import RenderPosts from "../RenderPosts";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "../Loader";
import { LoadingComponent, PostsComponent } from "./styles";

export default function Posts() {
  const [username, setUsername] = React.useState<string>("");
  const user = useSelector(selectAuthUser);
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  const [limit, setLimit] = React.useState(0);
  const [hasMore, setHasMore] = React.useState(true);
  const [isFetchPostsLoading, setIsFetchPostsLoading] = React.useState(false);

  React.useEffect(() => setUsername(user), [user]);

  function loadPosts() {
    if (isFetchPostsLoading) return;

    setIsFetchPostsLoading(true);

    //@ts-ignore
    dispatch(fetchPosts(limit))
      .then((posts: any) => {
        if (posts.payload.data.next === null) {
          setHasMore(false);
          return;
        }
        setLimit(limit + 10);
      })
      .finally(() => {
        setIsFetchPostsLoading(false);
      });
  }

  return (
    <PostsComponent>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadPosts}
        hasMore={hasMore}
        loader={
          <LoadingComponent>
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
