import React from "react";
import Header from "../components/Header.jsx";
import { LinearProgress } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ProductByCategoryCard from "../components/ProductByCategoryCard.jsx";
import Footer from "../components/Footer.jsx";
import axios from "../axios.js";

const SearchResult = () => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const { searchQuery } = useParams();

  React.useEffect(() => {
    /*console.log(searchQuery);*/
    axios.get(`products/search/${searchQuery}`).then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  }, [searchQuery]);

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {loading ? (
          <div className={`container px-4 mx-auto mt-10 min-h-screen`}>
            <LinearProgress />
          </div>
        ) : (
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
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
