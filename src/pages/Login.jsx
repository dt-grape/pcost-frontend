import { Link } from "react-router-dom";

import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "pCost | Вход";
  }, []);

  return (
    <div className={`h-screen flex flex-col items-center justify-center`}>
      <div
        className={`bg-white w-1/2 h-3/4 flex flex-col justify-center rounded-2xl dark:bg-gray-800`}
      >
        <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mx-auto w-auto text-6xl font-medium">pCost</h1>
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Авторизация
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
              >
                Email адрес
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  autoFocus="true"
                  className="
                dark:bg-gray-800 dark:text-gray-100 px-4
                block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  Пароль
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Забыли пароль?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="
                dark:bg-gray-800 dark:text-gray-100 px-4
                block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:brightness-110 transition"
              >
                Войти
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Не зарегистрированы?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
