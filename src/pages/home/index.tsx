import { Box, useTheme } from "@mui/material";
import { Header } from "../../shared/components/header";

export const Home = () => {
	const theme = useTheme();
	return (
		<Box height="100vh" marginX={theme.spacing(3)} >
			<Header />
		</Box>
	);
};