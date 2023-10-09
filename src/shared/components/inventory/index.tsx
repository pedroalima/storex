import * as M from "@mui/material";
import { InventoryItem } from "../inventory-item";
import { inventoryData } from "../../utils/data";

export const Inventory = () => {
	const theme = M.useTheme();

	return (
		<M.Box 
			padding={theme.spacing(4)}
			display="flex"
			justifyContent="space-around"
			flexWrap="wrap"
			gap={theme.spacing(4)}
		>
			{inventoryData.map( product => (
				<InventoryItem key={product.id} product={product} />
			))}
		</M.Box>
	);
};