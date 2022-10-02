import { getUserLogged, putAccessToken } from "../utils/api";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [authUser, setAuthUser] = useState(null);

  const onLogout = () => {
    setAuthUser(null);
    putAccessToken("");
  };

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthUser(data);
  };

  useEffect(() => {
    if (!authUser) {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        setAuthUser(accessToken);
      }
    }
  }, [authUser]);

  return [authUser, onLoginSuccess, onLogout];
};
