import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";

import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import categories from "../helpers/categories.js";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleDarkMode = () => {
    dispatch(toggleTheme());
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`container px-4 mx-auto pt-8 flex flex-col`}>
      <header className={`flex items-center justify-between`}>
        <Link to={`/`} className={`font-bold text-4xl `}>
          pCost
        </Link>
        <div
          className={`
          dark:dark:border-white
          sm:w-1/6 md:w-1/3 xl:w-1/2 md:flex items-center border-black border-solid border-[1px] rounded-2xl hidden`}
        >
          <input
            type="text"
            placeholder={`Найти в pCost`}
            className={`md:flex hidden w-full h-10 rounded-tl-2xl rounded-bl-2xl pl-8 dark:bg-gray-900`}
          />
          <button
            type="submit"
            className={`inline-flex h-10 items-center text-white bg-blue-500 rounded-tr-2xl rounded-br-2xl px-4 hover:brightness-110 transition`}
          >
            <SearchIcon />
          </button>
        </div>
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
        <div className={`flex gap-x-4`}>
          <button
            onClick={handleModal}
            className={`sm:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border-black border-solid border-[1px] dark:border-white`}
          >
            <MenuIcon />
          </button>
          <button
            className={`w-10 h-10 rounded-full inline-flex items-center justify-center  ${
              darkMode
                ? `border-white border-solid border-[1px] text-white`
                : `border-black border-solid border-[1px] text-black`
            }`}
          >
            {darkMode ? (
              <DarkModeIcon onClick={handleDarkMode} />
            ) : (
              <LightModeIcon onClick={handleDarkMode} />
            )}
          </button>
        </div>
      </header>
      {isModalOpen && (
        <div
          className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-white dark:bg-gray-900`}
        >
          <div className={`flex items-center justify-between flex-col`}>
            <button
              onClick={handleModal}
              className={`w-10 h-10 fixed top-4 right-4 rounded-full border-black border-solid border-[1px] dark:border-white`}
            >
              <CloseIcon />
            </button>
            <ul className={`flex flex-col gap-y-4`}>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={category.path} className={`text-3xl`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <ul className={`md:flex hidden gap-x-4 items-center mt-8`}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={category.path} className={`text-xl`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
