import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";

import { Link } from "react-router-dom";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Tooltip } from "@mui/material";

import Search from "./Search.jsx";
import Auth from "./Auth.jsx";
import Categories from "./Categories.jsx";

const Header = React.memo(() => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleDarkMode = () => {
    dispatch(toggleTheme());
  };

  const [isCategoriesModalOpen, setIsCategoriesModalOpen] =
    React.useState(false);

  const handleCategoriesModal = () => {
    setIsCategoriesModalOpen(!isCategoriesModalOpen);
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
        <Auth />
        <div className={`flex gap-x-4`}>
          <Tooltip title="Категории">
            <button
              onClick={handleCategoriesModal}
              className={`sm:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border-black border-solid border-[1px] dark:border-white`}
            >
              <MenuIcon />
            </button>
          </Tooltip>
          <Tooltip title="Избранное">
            <button
              className={`w-10 h-10 rounded-full inline-flex items-center justify-center  ${
                darkMode
                  ? `border-white border-solid border-[1px] text-white`
                  : `border-black border-solid border-[1px] text-black`
              }`}
            >
              <FavoriteIcon />
            </button>
          </Tooltip>
          <Tooltip title="Изменить тему">
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
          </Tooltip>
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
            <Categories setIsCategoriesModalOpen={setIsCategoriesModalOpen} />
          </div>
        </div>
      )}
      <div className={`md:flex hidden`}>
        <Categories />
      </div>
    </div>
  );
});

Header.displayName = "Header";

export default Header;
