import { Post, deletePost, editPost } from "@/redux/postSlice";
import { AppDispatch } from "@/redux/store";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { TbTrashXFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import DeleteModal from "../DeleteModal";
import EditModal from "../EditModal";
import { Body, BodyHeader, Container, EditIcons, Header } from "./styles";

type PostComponentProps = {
  post: Post;
  showEditIcons: boolean;
};

export default function RenderPosts({
  post,
  showEditIcons,
}: PostComponentProps) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  const handleEdit = async (id: number) => {
    dispatch(editPost({ id, post: { title, content } }));
    handleEditModalClick();
    setTitle("");
    setContent("");
  };

  const handleDeleteModalClick = () => {
    setIsDeleteModalOpen((prev) => !prev);
  };

  const handleEditModalClick = () => {
    setIsEditModalOpen((prev) => !prev);
  };

  return (
    <Container>
      <Header>
        <h1>{post.title}</h1>
        {showEditIcons && (
          <EditIcons>
            <TbTrashXFilled className="icon" onClick={handleDeleteModalClick} />
            <FaRegEdit className="icon" onClick={handleEditModalClick} />
          </EditIcons>
        )}
      </Header>
      <Body>
        <BodyHeader>
          <p className="post_owner">@{post.username}</p>
          <p className="post_time">{post.timeAgo}</p>
        </BodyHeader>
        <br />
        <p className="post_content">{post.content}</p>
      </Body>
      {isDeleteModalOpen && (
        <DeleteModal
          onCancel={handleDeleteModalClick}
          onDelete={() => handleDelete(post.id)}
        />
      )}
      {isEditModalOpen && (
        <EditModal
          onCancel={handleEditModalClick}
          onSave={() => handleEdit(post.id)}
          setTitle={setTitle}
          setContent={setContent}
          title={title}
          content={content}
        />
      )}
    </Container>
  );
}
