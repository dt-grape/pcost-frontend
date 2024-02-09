import React from "react";

import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import Categories from "../components/Categories.jsx";

const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <Categories />
      <ProductDetail />
    </>
  );
};

export default ProductDetailPage;
