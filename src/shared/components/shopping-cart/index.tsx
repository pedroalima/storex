import * as M from "@mui/material";
import { ShoppingCartItem } from "../shopping-cart-item";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ProductType } from "../../utils/data";
import { useNavigate } from "react-router-dom";

export const ShoppingCart = () => {
	const theme = M.useTheme();
	const navigate = useNavigate();

	const { products } : { products: ProductType[] } = useSelector((state: RootState) => state.cart);

	return (
		<M.Box p={theme.spacing(4)} display="flex" flexDirection="column" gap={theme.spacing(4)}>
			<M.Typography variant="h5" component="h3" >Shopping Cart</M.Typography>

			{products && products.map((product) => (
				<ShoppingCartItem key={product.id} product={product} />
			))}
			
			<M.Button variant="outlined" onClick={()=> navigate("/acknowledgment")}>To buy</M.Button>
		</M.Box>
	);
};