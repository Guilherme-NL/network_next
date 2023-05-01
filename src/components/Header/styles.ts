import styled from "styled-components";

export const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background: #7695ec;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 37px;

  h1 {
    color: #ffffff;
  }

  .icon {
    color: #ffffff;
    width: 25px;
    height: auto;
    cursor: pointer;
  }
`;
