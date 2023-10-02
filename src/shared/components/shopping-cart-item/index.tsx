import * as M from "@mui/material";
import { ProductTypeCart } from "../shopping-cart";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/cart/cartSlice";

export const ShoppingCartItem = ({ product } : { product : ProductTypeCart}) => {
	const dispatch = useDispatch();
	const { name, price, quantity } = product;

	const handleRemoveProduct = () => {
		dispatch(removeProduct(product));
		console.log("Click");
	};
	
	return (
		<M.Card>
			<M.Box display="flex">
				<M.Box display="flex" flexDirection="column" justifyContent="space-around">
					<M.IconButton>
						<M.Icon fontSize="small">add</M.Icon>
					</M.IconButton>
					<M.IconButton>
						<M.Icon fontSize="small">remove</M.Icon>
					</M.IconButton>
				</M.Box>
				
				<M.CardContent>
					<M.Typography>Product: {name}</M.Typography>
					<M.Typography>Value: {price}</M.Typography>
					<M.Typography>Quantity: {quantity}</M.Typography>
				</M.CardContent>

				<M.IconButton onClick={handleRemoveProduct}>
					<M.Icon fontSize="small">delete</M.Icon>
				</M.IconButton>
			</M.Box>
		</M.Card>
	);
};