import { Box, useTheme } from "@mui/material";
import { Header } from "../../shared/components/header";
import { DrawerStore } from "../../shared/components/drawer-shopping-cart";
import { Outlet } from "react-router-dom";

export const Home = () => {
	const theme = useTheme();

	return (
		<>
			<Box sx={{ background: theme.palette.background.default}}>
				<Header />
				<Outlet />
			</Box>
		
			<DrawerStore />
		</>
	);
};