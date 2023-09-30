import * as M from "@mui/material";

export const SignIn = () => {
	const theme = M.useTheme();
	return (
		<M.Box component="section" 
			height="80vh" 
			display="flex" 
			flexDirection="column" 
			alignItems="center" 
			justifyContent="center" 
			padding={theme.spacing(3)}
		>
			<M.Box component="form" 
				border={`1px solid ${theme.palette.primary.dark}`}
				borderRadius="20px"
				padding={theme.spacing(3)}
				display="flex" flexDirection="column" 
				alignItems="center" 
				justifyContent="center" 
				gap={theme.spacing(2)} 
				sx={{background: theme.palette.background.paper}} 
			>
				<M.TextField id="standard-basic" label="Login" variant="standard" />
				<M.TextField id="standard-basic" label="Password" variant="standard" />
				<M.Button>Confirm</M.Button>
			</M.Box>
		</M.Box>
	);
};