import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// Pages
import { Home } from "../pages/home";

export const RoutesApp = () => {
	return (
		<RouterProvider router={createBrowserRouter(createRoutesFromElements(
			<Route path="/" element={ <Home /> }>
			</Route>
		))} />
	);
};