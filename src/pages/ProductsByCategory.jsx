import { useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductByCategoryCard from "../components/ProductByCategoryCard";
import ProductByCategoryCardSkeleton from "../components/Skeletons/ProductByCategoryCardSkeleton.jsx";

import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import { Tooltip } from "@mui/material";

import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../redux/slices/productsByCategory.js";
import { toggleGrid } from "../redux/slices/grid.js";

const ProductsByCategory = () => {
  const dispatch = useDispatch();
  const { productsByCategory } = useSelector(
    (state) => state.productsByCategory,
  );
  const isProductsByCategoryLoading = productsByCategory.status === "loading";
  const { id, categoryName } = useParams();

  const handleGrid = () => {
    dispatch(toggleGrid());
  };

  const isGrid = useSelector((state) => state.grid.isGrid);

  useEffect(() => {
    document.title = `pCost | ${categoryName}`;
    dispatch(fetchProductsByCategory(id));
  }, [categoryName, dispatch, id]);

  return (
    <>
      <Header />
      <div className={`container flex flex-col px-4 mx-auto mt-8 min-h-screen`}>
        <button className={`md:flex hidden self-end`} onClick={handleGrid}>
          <Tooltip title="Изменить сетку">
            <SpaceDashboardIcon />
          </Tooltip>
        </button>
        {isProductsByCategoryLoading ? (
          <div
            className={`mt-4 ${
              isGrid
                ? `grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 auto-rows-auto`
                : `flex flex-col gap-y-2`
            }`}
          >
            {[...Array(10)].map((_, index) => (
              <ProductByCategoryCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className={`flex w-full flex-col`}>
            <div
              className={`mt-4 ${
                isGrid
                  ? `grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 auto-rows-auto`
                  : `flex flex-col gap-y-2`
              } `}
            >
              {productsByCategory.items.length === 0 ? (
                <div
                  className={`text-center p-10 bg-white dark:bg-gray-800 rounded-2xl ${
                    isGrid ? `col-span-5` : ``
                  } `}
                >
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
      </div>
      <Footer />
    </>
  );
};

export default ProductsByCategory;
