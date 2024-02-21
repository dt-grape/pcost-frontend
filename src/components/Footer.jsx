import React from "react";
import { Link } from "react-router-dom";

import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={`w-full bottom-0 bg-gray-300 py-8 mt-10 dark:bg-gray-950`}>
      <footer className={`container mx-auto px-4`}>
        <div className={`flex flex-row justify-between items-center`}>
          <p className={`font-medium text-lg`}>© {year} pCost</p>
          <ul className={`flex justify-between gap-x-8`}>
            <li>
              <Link to={``}>
                <TelegramIcon />
              </Link>
            </li>
            <li>
              <Link to={`https://github.com/dt-grape/pcost-frontend`}>
                <GitHubIcon />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
