import React from "react";
import { NavLink } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Tooltip } from "@mui/material";
import { green } from "@mui/material/colors";

const Header = () => {
  const isAuthorized = false;

  return (
    <>
      <header className="header">
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            pCost
          </NavLink>
          <div className="search-wrapper">
            <input
              className="search-input"
              type="search"
              placeholder="Найти в coFinder"
            />
            <Tooltip title="Поиск">
              <button type="button" className="search-button">
                <SearchIcon />
              </button>
            </Tooltip>
          </div>
          {isAuthorized ? (
            <div className="nav-auth">
              <NavLink to="/me">
                <Avatar sx={{ bgcolor: green[500] }}>D</Avatar>
              </NavLink>
              <NavLink to="/logout" className="nav-logout button">
                Выйти
                <LogoutIcon />
              </NavLink>
            </div>
          ) : (
            <div className="nav-auth">
              <NavLink to="/login" className="nav-login transparent">
                Войти
              </NavLink>
              <NavLink to="/register" className="nav-register button">
                Регистрация
              </NavLink>
            </div>
          )}
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Header;
