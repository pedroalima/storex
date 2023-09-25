import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState =  {
	products: [{}],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<object>) => {
			state.products.push(action.payload);
		}
	}
});

export const { 
	addProduct 
} = cartSlice.actions;

export default cartSlice.reducer;