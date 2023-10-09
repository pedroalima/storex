import * as M from "@mui/material";

export const Acknowledgment = () => {
	const theme = M.useTheme();

	return (
		<M.Box 
			component="section" 
			padding={theme.spacing(3)}
			height="88vh" 
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<M.Box 
				component="div" 
				border={`1px solid ${theme.palette.primary.dark}`}
				borderRadius="20px"
				padding={theme.spacing(3)}
				textAlign="center"
				sx={{background: theme.palette.background.paper}}
			>
				<M.Typography variant="h4" component="h2">Thanks for shopping with us</M.Typography>
			</M.Box>
		</M.Box>
	);
};