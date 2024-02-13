import React from "react";

import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import Categories from "../components/Categories.jsx";
import { Box } from "@mui/material";

const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Categories />
      </Box>
      <ProductDetail />
    </>
  );
};

export default ProductDetailPage;
