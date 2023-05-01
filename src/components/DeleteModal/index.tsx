import React, { FC } from "react";
import {
  Container,
  Modal,
  Actions,
  CancelButton,
  DeleteButton,
} from "./styles";

type Props = {
  onCancel: () => void;
  onDelete: () => void;
};

const DeleteModal: FC<Props> = ({ onCancel, onDelete }) => {
  return (
    <Container>
      <Modal>
        <h1>Are you sure you want to delete this post?</h1>
        <br />
        <br />
        <Actions>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        </Actions>
      </Modal>
    </Container>
  );
};

export default DeleteModal;
