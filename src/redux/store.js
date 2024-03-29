import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/products";
import { categoriesReducer } from "./slices/categories";
import themeReducer from "./slices/themeSlice";
import { productsByCategoryReducer } from "./slices/productsByCategory.js";
import gridReducer from "./slices/grid";
import { authReducer } from "./slices/auth.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
    theme: themeReducer,
    categories: categoriesReducer,
    productsByCategory: productsByCategoryReducer,
    grid: gridReducer,
    auth: authReducer,
  },
});

export default store;
