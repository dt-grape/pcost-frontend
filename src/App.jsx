import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsByCategory from "./pages/ProductsByCategory.jsx";
const App = () => {
  return (
    <div id="App" className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="products/category/:id" element={<ProductsByCategory />} />
      </Routes>
    </div>
  );
};

export default App;
