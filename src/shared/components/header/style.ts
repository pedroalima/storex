import * as M from "@mui/material";

export const StyledBadge = M.styled(M.Badge)<M.BadgeProps>(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}));