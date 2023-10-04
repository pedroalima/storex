import { RootState } from "../store";
import { ProductTypeCart } from "./cartSlice";

export const selectorTotalPrice = (state: RootState) => {
	if (state.cart && Array.isArray(state.cart.products)) {
		return state.cart.products.reduce(
			(acc, curr: ProductTypeCart) => acc + (curr.price || 0) * (curr.quantity || 1), 0
		);
	} else {
		return 0;
	}
};