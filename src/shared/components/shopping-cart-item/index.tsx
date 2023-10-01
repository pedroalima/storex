import * as M from "@mui/material";
import { ProductTypeCart } from "../shopping-cart";

export const ShoppingCartItem = ({ product } : { product : ProductTypeCart}) => {
	const { name, price, quantity } = product;
	
	return (
		<M.Card>
			<M.CardContent>
				<M.Typography>Product: {name}</M.Typography>
				<M.Typography>Value: {price}</M.Typography>
				<M.Typography>Quantity: {quantity}</M.Typography>
			</M.CardContent>
		</M.Card>
	);
};