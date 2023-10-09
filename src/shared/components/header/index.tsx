import { ShoppingCart } from "@mui/icons-material";
import * as M from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../redux/drawer-shopping-cart/drawerShoppingCartSlice";
import { RootState } from "../../redux/store";
import { MenuPopupState } from "../menu-popup-state";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../inventory-item";
import { StyledBadge } from "./style";

export const Header = () => {
	const theme = M.useTheme();
	const smDown = M.useMediaQuery(theme.breakpoints.down("sm"));
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { products } : { products: ProductType[] } = useSelector((state: RootState) => state.cart);

	const handleToggleDrawer = () => {
		dispatch(toggleDrawer());
	};

	const handleSingIn = () => {
		navigate("/sign-in");
	};

	const handleSingUp = () => {
		navigate("/sign-up");
	};

	return (
		<M.AppBar position="static" sx={
			smDown ? 
				{padding: theme.spacing(3), background: theme.palette.primary.dark} : 
				{paddingX: theme.spacing(5), paddingY: theme.spacing(3), background: theme.palette.primary.dark}
		}>
			<M.Box display="flex" justifyContent="space-between">
				<M.Typography variant="h4" component="h1" fontWeight="600" onClick={()=>navigate("/")} >Store X</M.Typography>

				<M.Box display="flex" justifyContent="space-between" alignItems="center" gap={theme.spacing(3)}>
					{smDown ? 
						<MenuPopupState /> 
						: 
						(
							<M.Box display="flex" gap={theme.spacing(1)}>
								<M.Button variant="contained" onClick={handleSingIn}>Sign In</M.Button>
								<M.Button variant="outlined" color="secondary" onClick={handleSingUp}>Sign Up</M.Button>
							</M.Box>
						)
					}

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