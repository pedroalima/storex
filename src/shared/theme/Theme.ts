import { createTheme } from "@mui/material/styles";

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
			default: "#F9F9F9",
			paper: "#FFFFFF",
		},
	},
	typography: {
		fontFamily: "Oxygen",
	}
});