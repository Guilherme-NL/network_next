import { setAuthUser } from "@/redux/authSlice";
import router from "next/router";
import { TbLogout } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { HeaderComponent } from "./styles";

export default function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setAuthUser(""));
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <HeaderComponent>
      <h1>CodeLeap Network</h1>
      <TbLogout className="icon" onClick={handleLogout}></TbLogout>
    </HeaderComponent>
  );
}
