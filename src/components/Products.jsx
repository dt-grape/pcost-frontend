import React from "react";
import { Link } from "react-router-dom";

import axios from "../axios";

import ProductCard from "./ProductCard";
import { LinearProgress, Box } from "@mui/material";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get("products").then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Box sx={{ width: "100%", paddingTop: "50px" }}>
          <LinearProgress />
        </Box>
      ) : (
        <div className="products-wrapper">
          {products.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="product-link"
            >
              <ProductCard
                name={product.name}
                price={product.price}
                img={product.link}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
