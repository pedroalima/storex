import { ShoppingCart } from "@mui/icons-material";
import * as M from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../redux/drawer-shopping-cart/drawerShoppingCartSlice";
import { RootState } from "../../redux/store";
import { ProductType } from "../../utils/data";
import { MenuPopupState } from "../menu-popup-state";
import { Link } from "react-router-dom";

export const Header = () => {
	const theme = M.useTheme();
	const { products } : { products: ProductType[] } = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();
	
	const handleToggleDrawer = () => {
		dispatch(toggleDrawer());
	};
	
	const StyledBadge = M.styled(M.Badge)<M.BadgeProps>(({ theme }) => ({
		"& .MuiBadge-badge": {
			right: -3,
			top: 13,
			border: `2px solid ${theme.palette.background.paper}`,
			padding: "0 4px",
		},
	}));


	return (
		<M.AppBar position="static" sx={{padding: theme.spacing(3), background: theme.palette.primary.dark}} >
			<M.Box display="flex" justifyContent="space-between">
				<Link to="/">
					<M.Typography variant="h4" component="h1" fontWeight="600">Store X</M.Typography>
				</Link>

				<M.Box display="flex" justifyContent="space-between" alignItems="center" width="40%">
					<MenuPopupState />

					<M.IconButton color="secondary" onClick={handleToggleDrawer}>
						<StyledBadge badgeContent={products.length} color="secondary">
							<ShoppingCart />
						</StyledBadge>
					</M.IconButton>
				</M.Box>
			</M.Box>
		</M.AppBar>
	);
};