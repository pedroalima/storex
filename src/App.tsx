import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./shared/theme";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./shared/style/global";

export const App = () => {
	return (
		<ThemeProvider theme={Theme}>
			<BrowserRouter>
				<AppRoutes />
				<GlobalStyle />
			</BrowserRouter>
		</ThemeProvider>
	);
};