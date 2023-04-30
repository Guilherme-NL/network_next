import React, { FC } from "react";
import styled from "styled-components";

import Input from "@/components/StyledInput";
import TextArea from "@/components/StyledTextArea";

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

const Container = styled.div`
  background-color: rgba(119, 119, 119, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Modal = styled.div`
  width: 660px;
  background-color: #fff;
  border: 1px solid #999999;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  width: 120px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
`;

const CancelButton = styled(Button)`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #999999;
`;

const DeleteButton = styled(Button)`
  background-color: #47b960;
  color: #ffffff;
`;

export default EditModal;
