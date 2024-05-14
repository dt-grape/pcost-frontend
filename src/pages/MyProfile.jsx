import React from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/slices/auth.js";

import user from "../static/user.png";

const MyProfile = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/";
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div
        className={`container mx-auto px-4 pt-8 flex flex-row gap-x-4 min-h-screen`}
      >
        <div className={`flex flex-col w-full gap-y-4`}>
          <div
            className={`bg-white rounded-2xl p-4 shadow-2xl flex flex-row md:gap-x-8 gap-x-4 dark:bg-gray-800 dark:shadow-none`}
          >
            <img src={user} alt="" className={`md:w-64 w-32 rounded-xl`} />
            <div className={`mt-2`}>
              <h2 className={`font-bold xl:text-6xl md:text-4xl text-2xl`}>
                Макаренко Егор Алексеевич
              </h2>
            </div>
          </div>
          <div
            className={`bg-white rounded-2xl p-4 shadow-2xl flex flex-col dark:bg-gray-800 dark:shadow-none`}
          >
            <h2 className={`font-bold text-4xl py-4`}>Информация</h2>
            <div className={`flex flex-col gap-y-4`}>
              <input
                type="text"
                placeholder="Телефон"
                className={`inline-flex focus:outline-none border-solid border-gray-300 border-[1px] rounded-xl self-start px-4 py-4 w-80 dark:bg-gray-800`}
              />
              <input
                type="email"
                placeholder="Почта"
                className={`inline-flex focus:outline-none border-solid border-gray-300 border-[1px] rounded-xl self-start px-4 py-4 w-80 dark:bg-gray-800`}
              />
              <input
                type="text"
                placeholder="Имя пользователя"
                className={`inline-flex focus:outline-none border-solid border-gray-300 border-[1px] rounded-xl self-start px-4 py-4 w-80 dark:bg-gray-800`}
              />
              <div className={`mt-8`}>
                <button
                  onClick={() => handleLogout()}
                  className={`flex items-center ml-auto px-8 bg-blue-500 text-white hover:brightness-110 h-10 rounded-2xl transition`}
                >
                  Выйти из аккаунта
                </button>
              </div>
            </div>
            <div
              className={`bg-gray-100 p-4 mt-4 flex items-center justify-center dark:bg-gray-900 rounded-xl`}
            >
              <p>Дата регистрации: 03.04.2024</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyProfile;
