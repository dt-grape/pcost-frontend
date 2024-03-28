import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchProductsByCategory = createAsyncThunk(
  "productsByCategory/fetchProductsByCategory",
  async (id) => {
    const { data } = await axios.get(`products/category/${id}`);
    return data;
  },
);

const initialState = {
  productsByCategory: {
    items: [],
    status: "loading",
  },
};

const productsByCategorySlice = createSlice({
  name: "productsByCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.productsByCategory.items = [];
      state.productsByCategory.status = "loading";
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.productsByCategory.items = action.payload;
      state.productsByCategory.status = "loaded";
    });
    builder.addCase(fetchProductsByCategory.rejected, (state) => {
      state.productsByCategory.items = [];
      state.productsByCategory.status = "error";
    });
  },
});

export const productsByCategoryReducer = productsByCategorySlice.reducer;
