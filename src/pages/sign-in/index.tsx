import * as M from "@mui/material";

export const SignIn = () => {
	const theme = M.useTheme();
	const smDown = M.useMediaQuery(theme.breakpoints.down("sm"));
	const lgDown = M.useMediaQuery(theme.breakpoints.down("lg"));

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
				width={
					smDown ? 
						"75%" :
						lgDown ?
							"25%" :
							"18%"
				}
				border={`1px solid ${theme.palette.primary.dark}`}
				borderRadius="20px"
				padding={theme.spacing(3)}
				display="flex" flexDirection="column" 
				alignItems="center" 
				justifyContent="center" 
				gap={theme.spacing(2)} 
				sx={{background: theme.palette.background.paper}} 
			>
				<M.TextField 
					type="email"
					id="email" 
					label="E-mail" 
					variant="standard" 
				/>
				<M.TextField 
					type="password" 
					id="password" 
					label="Password" 
					variant="standard" 
				/>
				<M.Button variant="contained">Confirm</M.Button>
			</M.Box>
		</M.Box>
	);
};