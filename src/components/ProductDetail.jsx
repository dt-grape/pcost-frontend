import { useState, useEffect } from "react";

import { Rating, Typography, Box, LinearProgress } from "@mui/material";

import { useParams } from "react-router-dom";

import axios from "../axios";

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

  return (
    <>
      {loading ? (
        <div className={`container mx-auto pt-10 px-4`}>
          <LinearProgress />
        </div>
      ) : (
        <div className={`container mx-auto px-4 pt-10`}>
          <div
            className={`flex md:flex-row flex-col items-center justify-center gap-8`}
          >
            <img
              src={product.image}
              alt=""
              className={`aspect-square object-contain bg-white rounded-2xl p-4`}
            />

            <div className="flex flex-col gap-y-4 justify-center">
              <h2 className={`font-medium text-2xl`}>{product.name}</h2>
              <button
                className={`inline-flex items-center justify-center bg-blue-500 text-white h-10 rounded-2xl hover:brightness-110 transition self-start px-8`}
              >
                Добавить в избранное
              </button>
            </div>
          </div>
          <div className={`flex flex-col gap-y-4`}>
            <div className={`flex flex-col gap-y-2`}>
              <h3 className={`font-medium text-2xl`}>Цены</h3>
              <hr className={`border-black dark:border-white`} />
              <ul className={`flex flex-col`}>
                {Object.entries(product.prices).map(([store, price]) => (
                  <li className="" key={store}>
                    <p className={`text-xl`}>
                      {store}: {price} руб.
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
    </>
  );
};

export default ProductDetail;
