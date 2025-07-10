import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  collection: [],
  fav: [],
};
const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCollection: (state, action) => {
      const exits = state.collection.find(
        (item) => item.bookId === action.payload.bookId
      );
      if (!exits) {
        state.collection.push({ ...action.payload });
      }
    },
    addToFavroute: (state, action) => {
      const exits = state.fav.find(
        (item) => item.bookId === action.payload.bookId
      );
      if (!exits) {
        state.fav.push({ ...action.payload });
      }
    },
  },
});
export const { addToCollection, addToFavroute } = cartReducer.actions;
export default cartReducer.reducer;
