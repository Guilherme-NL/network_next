import styled from "styled-components";
import React from "react";
import { selectAuthUser } from "@/redux/authSlice";
import { useSelector } from "react-redux";
import { selectPosts } from "@/redux/postSlice";
import RenderPosts from "./RenderPosts";

export default function Posts() {
  const [username, setUsername] = React.useState<string>("");
  const user = useSelector(selectAuthUser);
  const posts = useSelector(selectPosts);

  React.useEffect(() => setUsername(user), [user]);

  return (
    <PostsComponent>
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
    </PostsComponent>
  );
}

const PostsComponent = styled.div`
  margin-bottom: 200px;
`;
