import React from "react";
import { NavLink } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

import { Avatar, Box, Modal, Tooltip } from "@mui/material";
import { green } from "@mui/material/colors";
import ModalCategories from "./ModalCategories.jsx";

const Header = () => {
  const isAuthorized = false;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    backgroundColor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            pCost
          </NavLink>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <div className="search-wrapper">
              <input
                className="search-input"
                type="search"
                placeholder="Найти в pCost"
              />
              <Tooltip title="Поиск">
                <button type="button" className="search-button">
                  <SearchIcon />
                </button>
              </Tooltip>
            </div>
          </Box>
          {isAuthorized ? (
            <div className="nav-auth">
              <NavLink to="/me">
                <Avatar sx={{ backgroundColor: green[500] }}>D</Avatar>
              </NavLink>
              <NavLink to="/logout" className="nav-logout button">
                Выйти
                <LogoutIcon />
              </NavLink>
            </div>
          ) : (
            <>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <div className="nav-auth">
                  <NavLink to="/login" className="nav-login transparent">
                    Войти
                  </NavLink>
                  <NavLink to="/register" className="nav-register button">
                    Регистрация
                  </NavLink>
                </div>
              </Box>
              <Box sx={{ display: { md: "none", xs: "block" } }}>
                <button onClick={handleOpen} className="transparent">
                  <MenuIcon />
                </button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  sx={{ backdropFilter: "blur(15px)" }}
                >
                  <Box sx={style}>{open && <ModalCategories />}</Box>
                </Modal>
              </Box>
            </>
          )}
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Header;
