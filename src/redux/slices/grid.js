import { createSlice } from "@reduxjs/toolkit";

export const gridSlice = createSlice({
  name: "grid",
  initialState: {
    isGrid: false,
  },
  reducers: {
    toggleGrid: (state) => {
      state.isGrid = !state.isGrid;
    },
  },
});

export const { toggleGrid } = gridSlice.actions;

export default gridSlice.reducer;
