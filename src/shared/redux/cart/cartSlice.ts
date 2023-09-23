import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		// addProduct: (state, action: PayloadAction<string>) => {
		// 	return [...state, action.payload];
		// }
	}
});

// export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;