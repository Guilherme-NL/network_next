import React from "react";
import { TbTrashXFilled } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchPosts } from "@/redux/postSlice";
import axios from "axios";
import DeleteModal from "../DeleteModal";
import EditModal from "../EditModal";
import { Body, BodyHeader, Container, EditIcons, Header } from "./styles";

type PostComponentProps = {
  post: {
    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string;
  };
  showEditIcons: boolean;
};

export default function RenderPosts({
  post,
  showEditIcons,
}: PostComponentProps) {
  const [timeAgo, setTimeAgo] = React.useState("");
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [selectedPostDeleteId, setSelectedPostDeleteId] = React.useState<
    number | null
  >(null);
  const [selectedPostEditId, setSelectedPostEditId] = React.useState<
    number | null
  >(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = async () => {
    const url = `https://dev.codeleap.co.uk/careers/${selectedPostDeleteId}/`;
    await axios.delete(url).catch((err) => {
      console.log("ops, não foi possível deletar o seu post");
    });
    //@ts-ignore
    dispatch(fetchPosts());
    setSelectedPostDeleteId(null);
  };

  const handleEdit = async () => {
    const url = `https://dev.codeleap.co.uk/careers/${selectedPostEditId}/`;
    const body = {
      title,
      content,
    };
    await axios.patch(url, body).catch((err) => {
      console.log(err);
    });
    //@ts-ignore
    dispatch(fetchPosts());
    setSelectedPostEditId(null);
  };

  React.useEffect(() => {
    const createdDate = new Date(post.created_datetime);
    const currentDate = new Date();
    const timeDiff = Math.round(
      (currentDate.getTime() - createdDate.getTime()) / 1000
    ); // time diff in seconds

    if (timeDiff < 60) {
      setTimeAgo(`${timeDiff} seconds ago`);
    } else if (timeDiff < 3600) {
      setTimeAgo(`${Math.round(timeDiff / 60)} minutes ago`);
    } else if (timeDiff < 86400) {
      setTimeAgo(`${Math.round(timeDiff / 3600)} hours ago`);
    } else {
      setTimeAgo(`${Math.round(timeDiff / 86400)} days ago`);
    }
  }, [post.created_datetime]);

  return (
    <Container>
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
          <p className="post_time">{timeAgo}</p>
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
}
