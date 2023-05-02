import router from "next/router";
import React from "react";

export const useUser = () => {
  const [userName, setUserName] = React.useState("");

  React.useEffect(() => {
    const user = localStorage.getItem("user") || "";
    setUserName(user);
    if (!user) {
      router.push("/");
      return;
    }

    if (user && router.asPath !== "/network") {
      router.push("/network");
    }
  }, []);

  return { userName };
};
