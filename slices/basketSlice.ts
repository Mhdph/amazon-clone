import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../typings";
export interface basketSlice {
  items: { products: Products; count: number }[];
}

const initialState: basketSlice = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<basketSlice>) => {},
    removeFromBasket: (state, action: PayloadAction<basketSlice>) => {},
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
