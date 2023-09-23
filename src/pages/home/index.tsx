import { Box } from "@mui/material";
import { Header } from "../../shared/components/header";
import { DrawerStore } from "../../shared/components/drawer-store";
import { Inventory } from "../../shared/components/inventory";

export const Home = () => {
	return (
		<>
			<Box height="100vh">
				<Header />

				<Inventory />
			</Box>
			<DrawerStore />
		</>
	);
};