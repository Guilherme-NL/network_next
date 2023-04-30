import styled from "styled-components";
import React from "react";
import { TbTrashXFilled } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/redux/authSlice";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const PostsComponent = styled.div`
  margin-bottom: 200px;
`;

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-top: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: #7695ec;
  border-radius: 15px 15px 0px 0px;
  padding: 24px;

  h1 {
    color: #ffffff;
  }
`;

const EditIcons = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;

  .icon {
    color: #ffffff;
    width: 25px;
    height: auto;
    cursor: pointer;
  }
`;

const Body = styled.div`
  padding: 24px;

  .post_owner {
    font-weight: 700;
    color: #777777;
    font-size: 18px;
  }

  .post_time {
    font-weight: 400;
    color: #777777;
    font-size: 18px;
  }

  .post_content {
    font-weight: 400;
    font-size: 18px;
    color: #000000;
  }
`;

const BodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Posts() {
  interface IData {
    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string;
  }

  const username = useSelector(selectAuthUser);
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [posts, setPosts] = React.useState<IData[]>([]);
  const [selectedPostDeleteId, setSelectedPostDeleteId] = React.useState<
    number | null
  >(null);
  const [selectedPostEditId, setSelectedPostEditId] = React.useState<
    number | null
  >(null);

  React.useEffect(() => {
    const url = "https://dev.codeleap.co.uk/careers/";
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data.results);
      })
      .catch((err) => {
        alert(err.response.statusText);
      });
  }, []);

  const handleDelete = () => {
    const url = `https://dev.codeleap.co.uk/careers/${selectedPostDeleteId}/`;
    //optimistic update
    const backupPosts = [...posts];
    setPosts(posts.filter((post) => post.id !== selectedPostDeleteId));
    axios.delete(url).catch((err) => {
      console.log("ops, não foi possível deletar o seu post");
      setPosts(backupPosts);
    });
    setSelectedPostDeleteId(null);
  };

  const handleEdit = () => {
    const url = `https://dev.codeleap.co.uk/careers/${selectedPostEditId}/`;
    const body = {
      title,
      content,
    };
    //optimistic update
    const backupPosts = [...posts];
    setPosts(
      posts.map((post) => {
        if (post.id === selectedPostEditId) {
          return { ...post, title, content };
        } else {
          return post;
        }
      })
    );
    axios.patch(url, body).catch((err) => {
      console.log("ops, não foi possível editar o seu post");
      setPosts(backupPosts);
    });
    setSelectedPostEditId(null);
  };

  return (
    <PostsComponent>
      {posts.map((post) => {
        const showEditIcons = username === post.username;
        return (
          <Container key={post.id}>
            <Header>
              <h1>{post.title}</h1>
              {showEditIcons && (
                <EditIcons>
                  <TbTrashXFilled
                    className="icon"
                    onClick={() => setSelectedPostDeleteId(post.id)}
                  />
                  <FaRegEdit
                    className="icon"
                    onClick={() => setSelectedPostEditId(post.id)}
                  />
                </EditIcons>
              )}
            </Header>
            <Body>
              <BodyHeader>
                <p className="post_owner">@{post.username}</p>
                <p className="post_time">25 minutes ago</p>
              </BodyHeader>
              <br />
              <p className="post_content">{post.content}</p>
            </Body>
            {selectedPostDeleteId === post.id && (
              <DeleteModal
                onCancel={() => setSelectedPostDeleteId(null)}
                onDelete={handleDelete}
              />
            )}
            {selectedPostEditId === post.id && (
              <EditModal
                onCancel={() => setSelectedPostEditId(null)}
                onSave={handleEdit}
                setTitle={setTitle}
                setContent={setContent}
                title={title}
                content={content}
              />
            )}
          </Container>
        );
      })}
    </PostsComponent>
  );
}
