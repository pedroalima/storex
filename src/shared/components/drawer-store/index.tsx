
import * as M from "@mui/material";
import { ShoppingCart } from "../shopping-cart";

export const DrawerStore = () => {
	return (
		<M.Drawer open={false} anchor="right">
			<ShoppingCart />
		</M.Drawer>
	);
};