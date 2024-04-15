import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./Skeletons/ProductCardSkeleton.jsx";

import { fetchProducts } from "../redux/slices/products.js";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const isProductsLoading = products.status === "loading";

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={`container min-h-screen px-4 mx-auto pt-10`}>
      {isProductsLoading ? (
        <div className="grid sm:grid-cols-2 gap-y-8 md:grid-cols-4 xl:grid-cols-6 auto-rows-auto xl:gap-6 md:gap-4 sm:gap-2">
          {[...Array(12)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-y-8 md:grid-cols-4 xl:grid-cols-6 auto-rows-auto xl:gap-6 md:gap-4 sm:gap-2">
          {products.items.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="">
              <ProductCard
                name={product.name}
                price={product.price}
                img={product.link}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
