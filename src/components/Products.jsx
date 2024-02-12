import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ProductCard from "./ProductCard";
import { LinearProgress, Box } from "@mui/material";
import { fetchProducts } from "../redux/slices/products.js";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const isProductsLoading = products.status === "loading";

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {isProductsLoading ? (
        <Box sx={{ width: "100%", paddingTop: "50px" }}>
          <LinearProgress />
        </Box>
      ) : (
        <div className="products-wrapper">
          {products.items.map((product) => (
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
