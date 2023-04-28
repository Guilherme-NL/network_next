import styled from "styled-components";

const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  background: #7695ec;
  position: absolute;
  top: 0;
  right: 0;

  h1 {
    margin-left: 37px;
    color: #ffffff;
  }
`;

export default function Header() {
  return (
    <HeaderComponent>
      <h1>CodeLeap Network</h1>
    </HeaderComponent>
  );
}
