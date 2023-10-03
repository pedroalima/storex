import { createSlice } from "@reduxjs/toolkit";

export type ProductTypeCart = {
	id: number,
	name: string,
	price: number,
	img: string,
	quantity?: number,
}

type CartStateType = {
	products: ProductTypeCart[]
}

type CartActionType = {
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
		addProduct: (state: CartStateType, action: CartActionType) => {
			const existingProduct = state.products.find(product => product.id === action.payload.id);

			if (existingProduct) {
				if (existingProduct.quantity) {
					existingProduct.quantity += 1;
				}
			} else {
				state.products.push({ ...action.payload, quantity: 1 });
			}
		},
		removeProduct: (state: CartStateType, action: CartActionType) => {
			state.products = state.products.filter(product => product.id !== action.payload.id);
		},
		increaseQuantityProduct: (state: CartStateType, action: CartActionType) => {
			state.products.map(product => {
				if (product.id === action.payload.id) {
					product.quantity ? 
						product.quantity += 1 : 
						product;
				}
			});
		},
		decreaseQuantityProduct: (state: CartStateType, action: CartActionType) => {
			state.products.map(product => {
				if (product.id === action.payload.id) {
					if (product.quantity) {
						product.quantity > 1 ? 
							product.quantity -= 1 : 
							state.products = state.products.filter(product => product.id !== action.payload.id);
					}
				}
			});
		}
	}
});

export const { 
	addProduct,
	removeProduct,
	increaseQuantityProduct,
	decreaseQuantityProduct 
} = cartSlice.actions;

export default cartSlice.reducer;