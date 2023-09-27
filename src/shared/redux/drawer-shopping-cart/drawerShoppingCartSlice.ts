import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	IsDrawerOpen: false,
};

export const drawerShoppingCartSlice = createSlice({
	name: "drawerShoppingCart",
	initialState,
	reducers: {
		toggleDrawer: (state) => {
			state.IsDrawerOpen === true ? 
				state.IsDrawerOpen = false :
				state.IsDrawerOpen = true;
		}
	}
});

export const { toggleDrawer } = drawerShoppingCartSlice.actions;
export default drawerShoppingCartSlice.reducer;