
import * as M from "@mui/material";
import { ShoppingCart } from "../shopping-cart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleDrawer } from "../../redux/drawer-shopping-cart/drawerShoppingCartSlice";

export const DrawerStore = () => {
	const dispatch = useDispatch();
	const { IsDrawerOpen } = useSelector((state: RootState) => state.drawer);

	const handleToggleDrawer = () => {
		dispatch(toggleDrawer());
	};

	return (
		<M.Drawer open={IsDrawerOpen} variant="temporary" anchor="right" onClose={handleToggleDrawer}>
			<ShoppingCart />
		</M.Drawer>
	);
};