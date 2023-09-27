import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../utils/data";

type CartStateType = {
	products: ProductType[]
}

const initialState =  {
	products: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state: CartStateType, action) => {
			state.products.push(action.payload);
		}
	}
});

export const { 
	addProduct 
} = cartSlice.actions;

export default cartSlice.reducer;