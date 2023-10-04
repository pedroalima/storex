import * as M from "@mui/material";
import { useDispatch } from "react-redux";
import { ProductTypeCart, decreaseQuantityProduct, increaseQuantityProduct, removeProduct } from "../../redux/cart/cartSlice";
import { currency } from "../../utils/local-currency";

export const ShoppingCartItem = ({ product } : { product : ProductTypeCart}) => {
	const theme = M.useTheme();
	const dispatch = useDispatch();
	const { name, price, quantity } = product;

	const handleRemoveProduct = () => {
		dispatch(removeProduct(product));
	};

	const handleIncreaseQuantityProduct = () => {
		dispatch(increaseQuantityProduct(product));
	};

	const handleDecreaseQuantityProduct = () => {
		dispatch(decreaseQuantityProduct(product));
	};
	
	return (
		<M.Card>
			<M.Box display="flex" justifyContent="space-between">
				<M.Box display="flex" flexDirection="column" justifyContent="space-around">
					<M.IconButton onClick={handleIncreaseQuantityProduct}>
						<M.Icon fontSize="small">add</M.Icon>
					</M.IconButton>
					<M.IconButton onClick={handleDecreaseQuantityProduct}>
						<M.Icon fontSize="small">remove</M.Icon>
					</M.IconButton>
				</M.Box>
				
				<M.Box padding={theme.spacing(2)} flexGrow={1}>
					<M.Typography>Product: {name}</M.Typography>
					<M.Typography>Value: {currency(price)}</M.Typography>
					<M.Typography>Quantity: {quantity}</M.Typography>
				</M.Box>

				<M.IconButton onClick={handleRemoveProduct}>
					<M.Icon fontSize="small">delete</M.Icon>
				</M.IconButton>
			</M.Box>
		</M.Card>
	);
};