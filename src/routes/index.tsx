import { Navigate, Route, Routes } from "react-router-dom";
// Pages
import { Home } from "../pages/home";
import { SignIn } from "../pages/sign-in";
import { Inventory } from "../shared/components/inventory";
import { SignUp } from "../pages/sign-up";
import { Acknowledgment } from "../pages/acknowledgment";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={ <Home /> }>
				<Route path="/" element={ <Inventory /> } />
				<Route path="/sign-in" element={ <SignIn /> } />
				<Route path="/sign-up" element={ <SignUp /> } />
				<Route path="/acknowledgment" element={ <Acknowledgment /> } />
			</Route>
		
			<Route path="*" element={ <Navigate to="/" /> } />
		</Routes>
	);
};