import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";

import { NavLink } from "react-router-dom";
import Search from "./Search.jsx";
import { useSelector } from "react-redux";

const BottomNavigation = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = React.useState(false);

  const handleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  const isUserLoggedIn = useSelector((state) => state.auth.user !== null);

  return (
    <div
      className={` md:hidden sticky bg-white bottom-0 py-4 px-4 dark:bg-gray-800`}
    >
      <ul className={`flex justify-between items-center`}>
        <li>
          {isUserLoggedIn ? (
            <NavLink
              to="my-profile"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 flex flex-col items-center"
                  : "flex flex-col items-center"
              }
            >
              <PersonIcon fontSize="large" />
              <p className="text-xs">Профиль</p>
            </NavLink>
          ) : (
            <NavLink
              id="bottom-nav-link"
              to="login"
              className="flex flex-col items-center"
            >
              <PersonIcon fontSize="large" />
              <p className="text-xs">Войти</p>
            </NavLink>
          )}
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 flex flex-col items-center"
                : "flex flex-col items-center"
            }
            to={`/`}
          >
            <HomeIcon fontSize="large" />
            <p className={`text-xs`}>Главная</p>
          </NavLink>
        </li>
        <li>
          <button
            onClick={handleSearchModal}
            className={`flex flex-col items-center`}
          >
            <SearchIcon fontSize="large" />
            <p className={`text-xs`}>Поиск</p>
          </button>
        </li>
      </ul>
      {isSearchModalOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-36 bg-gray-100 dark:bg-gray-900`}
        >
          <div className={`flex items-center justify-between flex-col`}>
            <button
              onClick={handleSearchModal}
              className={`w-10 h-10 fixed top-4 right-4 rounded-full border-black border-solid border-[1px] dark:border-white`}
            >
              <CloseIcon />
            </button>
            <div className={`fixed top-20 w-5/6 `}>
              <Search
                setIsSearchModalOpen={setIsSearchModalOpen}
                isSearchModalOpen={isSearchModalOpen}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNavigation;
