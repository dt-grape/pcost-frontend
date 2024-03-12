import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsByCategory from "./pages/ProductsByCategory.jsx";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/slices/themeSlice.js";
import SearchResult from "./pages/SearchResult.jsx";

const App = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const darkModeFromStorage = localStorage.getItem("darkMode") === "true";
    if (darkModeFromStorage !== darkMode) {
      dispatch(toggleTheme());
    }
  }, [dispatch]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route
          path="products/category/:id/:categoryName"
          element={<ProductsByCategory />}
        />
        <Route
          path={"products/search/:searchQuery"}
          element={<SearchResult />}
        />
      </Routes>
    </div>
  );
};

export default App;
