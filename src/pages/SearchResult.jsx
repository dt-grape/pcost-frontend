import React from "react";
import Header from "../components/Header.jsx";
import { Tooltip } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ProductByCategoryCard from "../components/ProductByCategoryCard.jsx";
import Footer from "../components/Footer.jsx";
import axios from "../axios.js";

import { toggleGrid } from "../redux/slices/grid.js";
import { useDispatch, useSelector } from "react-redux";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ProductByCategoryCardSkeleton from "../components/Skeletons/ProductByCategoryCardSkeleton.jsx";
const SearchResult = () => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const { searchQuery } = useParams();

  const dispatch = useDispatch();

  const handleGrid = () => {
    dispatch(toggleGrid());
  };

  const isGrid = useSelector((state) => state.grid.isGrid);

  React.useEffect(() => {
    /*console.log(searchQuery);*/
    axios.get(`products/search/${searchQuery}`).then((response) => {
      setProducts(response.data);
      window.scrollTo(0, 0);
      document.title = `pCost | ${searchQuery}`;
      setLoading(false);
    });
  }, [searchQuery]);

  function getCorrectEnding(number) {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return "товаров";
    } else if (lastDigit === 1) {
      return "товар";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return "товара";
    } else {
      return "товаров";
    }
  }

  return (
    <>
      <Header />
      <div className={`container flex flex-col px-4 mx-auto mt-8 min-h-screen`}>
        <button className={`md:flex hidden self-end`} onClick={handleGrid}>
          <Tooltip title="Изменить сетку">
            <SpaceDashboardIcon />
          </Tooltip>
        </button>
        {loading ? (
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
            <div className={`flex`}>
              <h2 className={`md:text-2xl text-xl flex`}>
                Результаты поиска по запросу{" "}
                <p className={`font-bold ml-1`}>{searchQuery}</p>: найдено{" "}
                {products.length} {getCorrectEnding(products.length)}
              </h2>
            </div>
            <div
              className={` mt-8 ${
                isGrid
                  ? `grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 auto-rows-auto`
                  : `flex flex-col gap-y-2`
              } `}
            >
              {products.length === 0 ? (
                <div
                  className={`text-center p-10 bg-white dark:bg-gray-800 rounded-2xl ${
                    isGrid ? `col-span-5` : ``
                  } `}
                >
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
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
