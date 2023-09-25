
import * as M from "@mui/material";
import { ShoppingCart } from "../shopping-cart";

export const DrawerStore = () => {
	return (
		<>
			<M.Drawer open={true} anchor="right">
				<ShoppingCart />
			</M.Drawer>
		</>
	);
};