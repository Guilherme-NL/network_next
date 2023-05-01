import styled from "styled-components";

export const Container = styled.div`
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

export const Modal = styled.div`
  width: 660px;
  background-color: #fff;
  border: 1px solid #999999;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Button = styled.button`
  width: 120px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
`;

export const CancelButton = styled(Button)`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #999999;
`;

export const DeleteButton = styled(Button)`
  background-color: #47b960;
  color: #ffffff;
`;
