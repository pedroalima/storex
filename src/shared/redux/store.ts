import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import drawerShoppingCartReducer from "./drawer-shopping-cart/drawerShoppingCartSlice";

const store = configureStore({
	reducer: {
		cart: cartReducer,
		drawer: drawerShoppingCartReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>
export default store;