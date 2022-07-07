import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../typings";
import { RootState } from "../app/store";

const initialState = {
  items: [] as Products[],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (typeof item === "undefined") {
        console.warn(
          `Can't remove product (id: ${action.payload}) as its not in the basket`
        );
        return;
      }

      const newBasket = state.items.filter(
        (item) => item.id !== action.payload
      );

      state.items = [...newBasket];
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state: RootState): Products[] => state.basket.items;
export const selectTotal = (state: RootState): number =>
  state.basket.items.reduce(
    (total: number, item: Products) => total + item.price,
    0
  );

export default basketSlice.reducer;
