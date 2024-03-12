import React, { useState, useEffect } from "react";

import axios from "../axios";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductByCategoryCard from "../components/ProductByCategoryCard";

import { Link, useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";

const ProductsByCategory = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`products/category/${id}`).then((response) => {
      setProducts(response.data);
      setLoading(false);
      console.log(response.data);
    });
  }, [id]);

  useEffect(() => {
    document.title = "pCost | Видеокарты";
  });

  return (
    <>
      <Header />

      {loading ? (
        <div className={`container px-4 mx-auto mt-10 min-h-screen`}>
          <LinearProgress />
        </div>
      ) : (
        <div className={`min-h-screen`}>
          <div
            className={`container px-4 mx-auto mt-10 rounded-2xl bg-white dark:bg-gray-800`}
          >
            {products.length === 0 ? (
              <div className="text-center p-10">
                <h1 className="text-2xl">Ничего не найдено</h1>
              </div>
            ) : (
              products.map((product) => (
                <Link
                  to={`/products/${product.id}`}
                  key={product.id}
                  className=""
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
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductsByCategory;
