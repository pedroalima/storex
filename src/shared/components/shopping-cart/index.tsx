import * as M from "@mui/material";
import { ShoppingCartItem } from "../shopping-cart-item";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { ProductTypeCart } from "../../redux/cart/cartSlice";
import { toggleDrawer } from "../../redux/drawer-shopping-cart/drawerShoppingCartSlice";

export const ShoppingCart = () => {
	const theme = M.useTheme();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleBuyNow = () => {
		// forward to route
		navigate("/acknowledgment");
		// Close drawer
		dispatch(toggleDrawer());
	};

	const { products } : { products: ProductTypeCart[] } = useSelector((state: RootState) => state.cart);

	return (
		<M.Box p={theme.spacing(4)} display="flex" flexDirection="column" gap={theme.spacing(4)}>
			<M.Typography variant="h5" component="h3" >Shopping Cart</M.Typography>

			{products && products.map((product) => (
				<ShoppingCartItem key={product.id} product={product} />
			))}
			
			<M.Button variant="contained" onClick={handleBuyNow}>Buy now</M.Button>
		</M.Box>
	);
};