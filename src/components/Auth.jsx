import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/auth.js";

const Auth = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return (
    <>
      {user ? (
        <div className={`hidden sm:flex gap-x-4`}>
          <Link
            to={`/my-profile`}
            className={`dark:bg-transparent dark:border-white dark:hover:bg-white dark:hover:text-black inline-flex items-center px-8 border-black border-solid border-[1px] h-10 rounded-2xl hover:bg-black hover:text-white transition`}
          >
            Мой профиль
          </Link>
          <button
            onClick={() => handleLogout()}
            className={`inline-flex items-center px-8 bg-blue-500 text-white hover:brightness-110 h-10 rounded-2xl transition`}
          >
            <Logout />
          </button>
        </div>
      ) : (
        <div className={`sm:flex hidden gap-x-4`}>
          <Link
            to={`/login`}
            className={`
            dark:bg-transparent dark:border-white dark:hover:bg-white dark:hover:text-black
            inline-flex items-center px-8 border-black border-solid border-[1px] h-10 rounded-2xl hover:bg-black hover:text-white transition`}
          >
            Войти
          </Link>
          <Link
            to={`/register`}
            className={`inline-flex items-center px-8 bg-blue-500 text-white hover:brightness-110 h-10 rounded-2xl transition`}
          >
            Регистрация
          </Link>
        </div>
      )}
    </>
  );
};

export default Auth;
