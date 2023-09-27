import * as M from "@mui/material";

export const ModalSignIn = () => {

	const style = {
		position: "absolute" as const,
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "60%",
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	return (
		<M.Modal
			open={true}
			// onClose={handleClose}
		>
			<M.Box sx={style}>
				<M.Typography variant="h6" component="h2">
                    Sign In
				</M.Typography>
				<M.Input id="email" placeholder="Email" />
				<M.Input id='password' placeholder="Password" />
			</M.Box>
		</M.Modal>
		// <M.Modal open={true}>
		// 	<M.Box width="50%" sx={{ background: "white", }}>
		// 		<M.Typography >Sign In</M.Typography>
		// 	</M.Box>
		// </M.Modal>
	);
};