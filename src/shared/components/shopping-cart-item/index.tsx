import * as M from "@mui/material";
import { ProductType } from "../../utils/data";


export const ShoppingCartItem = ({ product } : { product : ProductType}) => {
	const { name, price } = product;
	
	return (
		<M.Card>
			<M.CardContent>
				<M.Typography>Product: {name}</M.Typography>
				<M.Typography>Value: {price}</M.Typography>
				<M.Typography>Quantity: 1</M.Typography>
			</M.CardContent>
		</M.Card>
	);
};