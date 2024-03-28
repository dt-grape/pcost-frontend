import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/products";
import { categoriesReducer } from "./slices/categories";
import themeReducer from "./slices/themeSlice";
import { productsByCategoryReducer } from "./slices/productsByCategory.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
    theme: themeReducer,
    categories: categoriesReducer,
    productsByCategory: productsByCategoryReducer,
  },
});

export default store;
