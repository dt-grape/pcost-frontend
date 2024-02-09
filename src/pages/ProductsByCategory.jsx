import { useState, useEffect } from "react";

import axios from "../axios";

import Header from "../components/Header.jsx";
import Categories from "../components/Categories.jsx";
import ProductByCategoryCard from "../components/ProductByCategoryCard";

import { Link } from "react-router-dom";
import { Box, LinearProgress } from "@mui/material";

const id = 1;

const ProductsByCategory = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`products/category/${id}`).then((response) => {
      setProducts(response.data);
      setLoading(false);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Categories />

      <div className="product-by-category-wrapper">
        {loading ? (
          <Box sx={{ width: "100%", paddingTop: "50px" }}>
            <LinearProgress />
          </Box>
        ) : (
          products.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="product-link"
            >
              <ProductByCategoryCard
                image={product.link}
                price={product.price}
                title={product.name}
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default ProductsByCategory;
