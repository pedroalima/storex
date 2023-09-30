import * as M from "@mui/material";
import {
	usePopupState,
	bindTrigger,
	bindMenu,
} from "material-ui-popup-state/hooks";
import { Link } from "react-router-dom";
  
export const MenuPopupState = () => {
	const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

	return (
		<>
			<M.Button variant="contained" {...bindTrigger(popupState)}>Profile</M.Button>
			<M.Menu {...bindMenu(popupState)}>
				<M.MenuItem onClick={popupState.close}>
					<Link to="/sign-in">Sign In</Link> 
				</M.MenuItem>
				<M.MenuItem onClick={popupState.close}>Sign Up</M.MenuItem>
			</M.Menu>
		</>
	);
};