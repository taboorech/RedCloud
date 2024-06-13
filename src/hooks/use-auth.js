import { useState } from "react";
import { useLogoutMutation } from "../redux";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const [ isAuth, setIsAuth ] = useState(!!localStorage.getItem("accessToken"));
  const [ logoutRequest ] = useLogoutMutation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setIsAuth(false);
    logoutRequest();
    navigate('/');
  }

  const logIn = (id, accessToken, refreshToken) => {
    setIsAuth(true);
    localStorage.setItem("userId", id)
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    navigate('/');
  }

  return {
    isAuth, 
    logIn, 
    logout
  };
}

export { useAuth };