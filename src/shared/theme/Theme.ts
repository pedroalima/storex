import { createTheme } from "@mui/material";
import { cyan, blue } from "@mui/material/colors";

export const Theme = createTheme({
	palette: {
		primary: {
			main: cyan[800],
			light: cyan[700],
			dark: cyan[900],
			contrastText: "#FFFFFF",
		},
		secondary: {
			main: blue[800],
			light: blue[700],
			dark: blue[900],
			contrastText: "#FFFFFF",
		},
		background: {
			default: "#F7F6F3",
			paper: "#FFFFFF",
		}
	}
});