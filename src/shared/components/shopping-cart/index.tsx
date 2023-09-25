import * as M from "@mui/material";
import { ShoppingCartItem } from "../shopping-cart-item";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const ShoppingCart = () => {
	const theme = M.useTheme();

	const cart = useSelector((state: RootState) => state.cart);

	return (
		<M.Box p={theme.spacing(4)} display="flex" flexDirection="column" gap={theme.spacing(4)}>
			<M.Typography variant="h5" component="h3" >Shopping Cart</M.Typography>

			{cart.products.map((product, i ) => (
				<ShoppingCartItem key={i} product={product} />
			))}

			<M.Button variant="outlined">To buy</M.Button>
		</M.Box>
	);
};