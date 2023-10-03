import * as M from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cart/cartSlice";

export type ProductType = {
	id: number,
	name: string,
	price: number,
	img: string,
}

export const InventoryItem = ({ product } : {product: ProductType }) => {
	const { name, price, img } = product;
	const theme = M.useTheme();

	const dispatch = useDispatch();

	const handleAddProduct = () => {
		dispatch(addProduct(product));
	};

	return (
		<M.Card>
			<M.Box paddingY={theme.spacing(2)} display="flex" justifyContent="center" >
				<M.CardMedia sx={{ width:"60%", height: 250 }} image={img} title={name} />
			</M.Box>
			
			<M.CardContent>
				<M.Typography 
					gutterBottom 
					variant="h5" 
					component="h3">{name}</M.Typography>
				<M.Typography 
					variant="h6" 
					component="span">{price}</M.Typography>
			</M.CardContent>

			<M.CardActions>
				<M.Button 
					size="small" 
					variant="contained" 
					onClick={handleAddProduct}
					color="primary">Add to cart</M.Button>
			</M.CardActions>
		</M.Card>
	);
};