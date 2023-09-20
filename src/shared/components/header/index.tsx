import { ShoppingCart } from "@mui/icons-material";
import * as M from "@mui/material";

export const Header = () => {
	const theme = M.useTheme();

	const StyledBadge = M.styled(M.Badge)<M.BadgeProps>(({ theme }) => ({
		"& .MuiBadge-badge": {
			right: -3,
			top: 13,
			border: `2px solid ${theme.palette.background.paper}`,
			padding: "0 4px",
		},
	}));

	return (
		<M.Box sx={{ flexGrow: 1 }}>
			<M.AppBar position="static" sx={{
				paddingX: theme.spacing(2), 
				background: theme.palette.primary.dark
			}} >
				<M.Toolbar>
					<M.Typography variant="h6" component="div" sx={{ 
						flexGrow: 1, 
						fontWeight:700 
					}}>Store X</M.Typography>
					<M.Box display="flex" justifyContent="space-between" sx={{
						width: "40%",
					}}>
						<M.Button variant="contained" color="secondary" size="small" sx={{ fontWeight:800 }}>Sign in</M.Button>
						<M.IconButton aria-label="cart" color="secondary">
							<StyledBadge badgeContent={4} color="secondary">
								<ShoppingCart />
							</StyledBadge>
						</M.IconButton>
					</M.Box>
				</M.Toolbar>
			</M.AppBar>
		</M.Box>
	);
};