import { Box, useTheme } from "@mui/material";
import { Header } from "../../shared/components/header";
import { Inventory } from "../../shared/components/inventory";
import { DrawerStore } from "../../shared/components/drawer-store";


export const Home = () => {
	const theme = useTheme();
	return (
		<>
			<Box sx={{ background: theme.palette.background.default}}>
				<Header />
				<Inventory />
			</Box>

			<DrawerStore />
		</>
	);
};