import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// Pages
import { Home } from "../pages/home";

export const AppRoutes = () => {
	return (
		<RouterProvider router={createBrowserRouter(createRoutesFromElements(
			<Route path="/" element={ <Home /> }>
			</Route>
		))} />
	);
};