import * as M from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cart/cartSlice";
import { currency } from "../../utils/local-currency";

export type ProductType = {
	id: number,
	name: string,
	price: number,
	img: string,
}

export const InventoryItem = ({ product } : {product: ProductType }) => {
	const { name, price, img } = product;
	const theme = M.useTheme();
	const smDown = M.useMediaQuery(theme.breakpoints.down("sm"));
	const mdDown = M.useMediaQuery(theme.breakpoints.down("md"));
	const lgDown = M.useMediaQuery(theme.breakpoints.down("lg"));

	const dispatch = useDispatch();

	const handleAddProduct = () => {
		dispatch(addProduct(product));
	};

	return (
		<M.Card sx={ 
			smDown ? 
				{ width: "100%", padding: theme.spacing(3), display: "flex", flexDirection: "column" } :
				mdDown ?
					{ width: "240px", padding: theme.spacing(3), display: "flex", flexDirection: "column" } :
					lgDown ?
						{ width: "250px", padding: theme.spacing(3), display: "flex", flexDirection: "column" } :
						{ width: "18%", padding: theme.spacing(3), display: "flex", flexDirection: "column" }
		}>
			<M.CardMedia sx={{ width:"200px", height: "200px", alignSelf: "center" }} image={img} title={name} />
			
			<M.CardContent sx={{paddingX: "0", paddingY: theme.spacing(2)}}>
				<M.Typography 
					gutterBottom 
					variant="h5" 
					component="h3">{name}</M.Typography>
				<M.Typography 
					variant="h6" 
					component="span">{currency(price)}</M.Typography>
			</M.CardContent>

			<M.CardActions sx={{padding: "0"}}>
				<M.Button 
					size="small" 
					variant="contained" 
					onClick={handleAddProduct}
					color="primary">Add to cart</M.Button>
			</M.CardActions>
		</M.Card>
	);
};