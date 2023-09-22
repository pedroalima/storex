import * as M from "@mui/material";
import { ShoppingCartItem } from "../shopping-cart-item";

export const ShoppingCart = () => {
	const theme = M.useTheme();

	return (
		<M.Box p={theme.spacing(4)} display="flex" flexDirection="column" gap={theme.spacing(4)}>
			<M.Typography variant="h5" component="h3" >Shopping Cart</M.Typography>

			<ShoppingCartItem />

			<M.Button variant="outlined">To buy</M.Button>
		</M.Box>
	);
};