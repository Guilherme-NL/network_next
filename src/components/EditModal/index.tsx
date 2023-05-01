import React, { FC } from "react";

import Input from "@/components/StyledInput";
import TextArea from "@/components/StyledTextArea";
import {
  Actions,
  CancelButton,
  Container,
  DeleteButton,
  Modal,
} from "./styles";

type Props = {
  onCancel: () => void;
  onSave: () => void;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  content: string;
};

const EditModal: FC<Props> = ({
  onCancel,
  onSave,
  setTitle,
  title,
  setContent,
  content,
}) => {
  return (
    <Container>
      <Modal>
        <h1>Edit item</h1>
        <br />
        <br />
        <p className="input_title">Title</p>
        <Input
          placeholder="Hello world"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <p className="input_title">Content</p>
        <TextArea
          placeholder="Content here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Actions>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <DeleteButton onClick={onSave}>Save</DeleteButton>
        </Actions>
      </Modal>
    </Container>
  );
};

export default EditModal;
