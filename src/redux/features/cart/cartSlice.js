import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  collection: [],
};
const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCollection: (state, action) => {
      state.collection.push({ ...action.payload });
    },
  },
});
export const { addToCollection } = cartReducer.actions;
export default cartReducer.reducer;
