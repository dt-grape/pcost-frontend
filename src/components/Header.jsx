import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";

import { Link } from "react-router-dom";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import categories from "../helpers/categories.js";
import Search from "./Search.jsx";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleDarkMode = () => {
    dispatch(toggleTheme());
  };

  const [isCategoriesModalOpen, setIsCategoriesModalOpen] =
    React.useState(false);

  const [isSearchModalOpen, setIsSearchModalOpen] = React.useState(false);

  const handleCategoriesModal = () => {
    setIsCategoriesModalOpen(!isCategoriesModalOpen);
  };

  const handleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  return (
    <div className={`container px-4 mx-auto pt-8 flex flex-col`}>
      <header className={`flex items-center justify-between`}>
        <Link to={`/`} className={`font-bold text-4xl `}>
          pCost
        </Link>
        <div className={`md:flex hidden sm:w-1/6 md:w-1/3 xl:w-1/2`}>
          <Search />
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
            onClick={handleSearchModal}
            className={`sm:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border-black border-solid border-[1px] dark:border-white`}
          >
            <SearchIcon />
          </button>
          <button
            onClick={handleCategoriesModal}
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
      {isCategoriesModalOpen && (
        <div
          className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-white dark:bg-gray-900`}
        >
          <div className={`flex items-center justify-between flex-col`}>
            <button
              onClick={handleCategoriesModal}
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
      {isSearchModalOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-36 bg-white dark:bg-gray-900`}
        >
          <div className={`flex items-center justify-between flex-col`}>
            <button
              onClick={handleSearchModal}
              className={`w-10 h-10 fixed top-4 right-4 rounded-full border-black border-solid border-[1px] dark:border-white`}
            >
              <CloseIcon />
            </button>
            <div className={`fixed top-20 w-5/6 `}>
              <Search />
            </div>
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
