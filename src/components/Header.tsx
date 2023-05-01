import { setAuthUser } from "@/redux/authSlice";
import router from "next/router";
import { TbLogout } from "react-icons/tb";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export default function Header() {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(setAuthUser(""));
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <HeaderComponent>
      <h1>CodeLeap Network</h1>
      <TbLogout className="icon" onClick={() => handleDelete()}></TbLogout>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.div`
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
