import * as M from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
  
export const MenuPopupState = () => {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleCloseSignIn = () => {
		navigate("/sign-in");
		handleClose();
	};

	const handleCloseSignUp = () => {
		navigate("/sign-up");
		handleClose();
	};

	return (
		<>
			<M.Button 
				variant="contained" 
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>Profile</M.Button>
			<M.Menu 
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{"aria-labelledby": "basic-button"}}
			>
				<M.MenuItem onClick={handleCloseSignIn}>Sign In</M.MenuItem>
				<M.MenuItem onClick={handleCloseSignUp}>Sign Up</M.MenuItem>
			</M.Menu>
		</>
	);
};