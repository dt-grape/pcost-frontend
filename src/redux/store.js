import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/products";
import { categoriesReducer } from "./slices/categories";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    theme: themeReducer,
    categories: categoriesReducer,
  },
});

export default store;
