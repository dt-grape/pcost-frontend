import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductByCategoryCard from "../components/ProductByCategoryCard";

import { Link, useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../redux/slices/productsByCategory.js";

const ProductsByCategory = () => {
  const dispatch = useDispatch();
  const { productsByCategory } = useSelector(
    (state) => state.productsByCategory,
  );
  const isProductsByCategoryLoading = productsByCategory.status === "loading";
  const { id, categoryName } = useParams();

  useEffect(() => {
    document.title = `pCost | ${categoryName}`;
    dispatch(fetchProductsByCategory(id));
  }, [categoryName, dispatch, id]);

  return (
    <>
      <Header />
      {isProductsByCategoryLoading ? (
        <div className={`container px-4 mx-auto mt-10 min-h-screen`}>
          <LinearProgress />
        </div>
      ) : (
        <div className={`min-h-screen`}>
          <div
            className={`container flex flex-col gap-y-4 px-4 mx-auto mt-10 `}
          >
            {productsByCategory.items.length === 0 ? (
              <div className="text-center p-10 bg-white dark:bg-gray-800 rounded-2xl">
                <h1 className="text-2xl">Ничего не найдено</h1>
              </div>
            ) : (
              productsByCategory.items.map((product) => (
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
