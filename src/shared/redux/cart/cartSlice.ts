import { createSlice } from "@reduxjs/toolkit";
import { ProductTypeCart } from "../../components/shopping-cart";

type CartStateType = {
	products: ProductTypeCart[]
}

type AddProductAction = {
	type: string;
	payload: ProductTypeCart;
};

const initialState =  {
	products: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state: CartStateType, action: AddProductAction) => {
			const existingProduct = state.products.find(product => product.id === action.payload.id);

			if (existingProduct) {
				existingProduct.quantity += 1;
			} else {
				state.products.push({ ...action.payload, quantity: 1 });
			}
		},
		removeProduct: (state: CartStateType, action: AddProductAction) => {
			state.products.filter(product => product.id !== action.payload.id);
		}
	}
});

export const { 
	addProduct 
} = cartSlice.actions;

export default cartSlice.reducer;