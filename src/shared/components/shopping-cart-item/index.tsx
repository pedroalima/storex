import * as M from "@mui/material";


export const ShoppingCartItem = () => {
	return (
		<M.Card>
			<M.CardContent>
				<M.Typography>Product: </M.Typography>
				<M.Typography>Value: </M.Typography>
				<M.Typography>Quantity: </M.Typography>
			</M.CardContent>
		</M.Card>
	);
};