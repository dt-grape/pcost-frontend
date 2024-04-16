import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "../axios";
import ProductDetailSkeleton from "./Skeletons/ProductDetailSkeleton.jsx";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`products/${id}`).then((response) => {
      setProduct(response.data);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    if (product) {
      document.title = `pCost | ${product.name}`;
      window.scrollTo(0, 0);
    }
  }, [product]);

  return (
    <div className={`container mx-auto px-4 min-h-screen`}>
      {loading ? (
        <div className={`mt-10`}>
          <ProductDetailSkeleton />
        </div>
      ) : (
        <div className={`mt-10`}>
          <div className={`flex md:flex-row flex-col justify-center gap-8`}>
            <img
              src={product.image}
              alt=""
              className={`md:w-1/3 w-full aspect-square object-contain bg-white rounded-2xl p-4 shadow-2xl dark:shadow-none`}
            />

            <div className="flex flex-col gap-y-4 justify-center">
              <h2 className={`font-medium text-2xl`}>{product.name}</h2>
              <button
                className={`w-80 inline-flex items-center justify-center bg-blue-500 text-white h-10 rounded-2xl hover:brightness-110 transition md:self-start self-center px-8`}
              >
                Добавить в избранное
              </button>
            </div>
          </div>
          <div className={`flex flex-col gap-y-4 md:mt-0 mt-4`}>
            <div className={`flex flex-col gap-y-2`}>
              <h3 className={`font-medium text-2xl`}>Цены</h3>
              <hr className={`border-black dark:border-white`} />
              <ul className={`flex flex-col`}>
                {Object.entries(product.prices).map(([store, price]) => (
                  <li className="" key={store}>
                    <p className={`text-xl`}>
                      {store}: {price} ₽
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="text-2xl font-medium">Описание</h3>
              <hr className={`border-black dark:border-white`} />
              <p className="text-xl">{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
