import React from "react";

import { Rating, Typography, Box, LinearProgress } from "@mui/material";

import { useParams } from "react-router-dom";

import axios from "../axios";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get(`products/${id}`).then((response) => {
      setProduct(response.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <>
          <div className="product-detail">
            <div className="product-image-wrapper">
              <img src={product.image} alt="" className="product-image" />
            </div>
            <div className="product-info">
              <Typography variant="h4">{product.name}</Typography>
              <div className="product-rating">
                <Typography>Оценка</Typography>
                <Rating defaultValue={3.5} precision={0.5} readOnly />
              </div>
              <button className="add-favorite-button transparent">
                Добавить в избранное
              </button>
            </div>
          </div>
          <div className="product-prices-wrapper">
            <div className="section-description">
              <h3 className="section-header">Цены</h3>
            </div>
            <ul className="prices-list">
              {Object.entries(product.prices).map(([store, price]) => (
                <li className="prices-item" key={store}>
                  <Typography variant="h6">
                    {store}: {price} руб.
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="section-description">
            <h3 className="section-header">Описание</h3>
            <p className="description-text">{product.description}</p>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
