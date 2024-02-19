import { useState, useEffect } from "react";

import axios from "../axios";

import Header from "../components/Header.jsx";
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

      {loading ? (
        <div className={`container px-4 mx-auto mt-10`}>
          <LinearProgress />
        </div>
      ) : (
        <div
          className={`container px-4 mx-auto mt-10 rounded-2xl bg-white dark:bg-gray-800`}
        >
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="">
              <ProductByCategoryCard
                image={product.link}
                price={product.price}
                title={product.name}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsByCategory;
