import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Page from "./components/Page";
// import { useAuth0 } from "@auth0/auth0-react";

function App(): JSX.Element {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="/" element={<Page title={"Home"} />} />
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
