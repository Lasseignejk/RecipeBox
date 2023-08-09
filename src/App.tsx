import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Page from "./components/Page";
import AllAccessPage from "./components/AllAccessPage";
// import { useAuth0 } from "@auth0/auth0-react";

function App(): JSX.Element {
	return (
		<div>
			<Nav />
			<Routes>
				{/* anyone can access */}
				<Route path="/" element={<AllAccessPage title={"Home"} />} />
				<Route
					path="/about"
					element={<AllAccessPage title={"About"} />}
				/>
				<Route
					path="/login"
					element={<AllAccessPage title={"Login"} />}
				/>

				{/* must be logged in */}
				<Route path="/plan" element={<Page title={"Plan"} />} />
				<Route path="/recipes" element={<Page title={"Recipes"} />} />
				<Route
					path="/groceries"
					element={<Page title={"Groceries"} />}
				/>
				<Route path="/account" element={<Page title={"Account"} />} />
			</Routes>
		</div>
	);
}

export default App;
