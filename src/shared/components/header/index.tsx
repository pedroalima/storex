import { ShoppingCart } from "@mui/icons-material";
import { Badge, BadgeProps, Box, Button, IconButton, styled } from "@mui/material";

export const Header = () => {
	const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
		"& .MuiBadge-badge": {
			right: -3,
			top: 13,
			border: `2px solid ${theme.palette.background.paper}`,
			padding: "0 4px",
		},
	}));

	return (
		<Box display="flex" justifyContent="space-between" alignItems="center">
			<h1>Store X</h1>
			<Box>
				<Button variant="contained">Sign in</Button>
				<IconButton aria-label="cart">
					<StyledBadge badgeContent={4} color="secondary">
						<ShoppingCart />
					</StyledBadge>
				</IconButton>
			</Box>
		</Box>
	);
};