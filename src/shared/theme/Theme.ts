import { createTheme } from "@mui/material";

export const Theme = createTheme({
	palette: {
		primary: {
			main: "#131921",
			light: "#515761",
			dark: "#131921",
			contrastText: "#FFFFFF",
		},
		secondary: {
			main: "#f1f0ed",
			light: "#f7f6f3",
			dark: "#e3e2df",
			contrastText: "#242321",
		},
		background: {
			paper: "#FFFFFF",
			default: "#F7F6F3",
		}
	},
	typography: {
		fontFamily: "Oxygen",
	}
});