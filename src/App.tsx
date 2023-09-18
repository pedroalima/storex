import { ThemeProvider } from "@mui/material";
import { AppRoutes } from "./routes";
import { Theme } from "./shared/theme";

export const App = () => {
	return (
		<ThemeProvider theme={Theme}>
			<AppRoutes />
		</ThemeProvider>
	);
};