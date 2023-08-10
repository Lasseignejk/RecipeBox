import { ReactNode } from "react";
import {
	FaUser,
	FaCalendarAlt,
	FaBook,
	FaClipboardList,
	FaHome,
	FaSignInAlt,
} from "react-icons/fa";
import NavLink from "./NavLink";
import { useAuth0 } from "@auth0/auth0-react";

interface LinksInterface {
	title: string;
	secondaryTitle?: string;
	icon: ReactNode;
	link: string;
}

const Nav = () => {
	const { isAuthenticated, user } = useAuth0();
	const userLinks: LinksInterface[] = [
		{
			title: "Plan",
			icon: <FaCalendarAlt />,
			link: "http://localhost:5173/plan",
		},
		{
			title: "Recipes",
			icon: <FaBook />,
			link: "http://localhost:5173/recipes",
		},
		{
			title: "Groceries",
			icon: <FaClipboardList />,
			link: "http://localhost:5173/groceries",
		},
		// {title: "Collaborate", icon: <FaUserFriends />},
		{
			title: "Account",
			icon: <FaUser />,
			link: "http://localhost:5173/account",
		},
	];

	const visitorLinks: LinksInterface[] = [
		{ title: "Home", icon: <FaHome />, link: "http://localhost:5173/" },

		{
			title: "Login",
			icon: <FaSignInAlt />,
			link: "http://localhost:5173/login",
		},
	];
	return (
		<>
			{isAuthenticated && (
				<nav
					className={`h-16 fixed bottom-0 w-full bg-lightSurfCon z-10`}>
					<h1 className={`hidden`}>Recipe Box</h1>
					<ul className={`flex justify-evenly h-full items-center`}>
						{userLinks.map((link, index) => (
							<NavLink link={link} key={index} />
						))}
					</ul>
				</nav>
			)}
			{!isAuthenticated && (
				<nav
					className={`h-16 fixed bottom-0 w-full bg-lightSurfCon z-10`}>
					<h1 className={`hidden`}>Recipe Box</h1>
					<ul className={`flex justify-evenly h-full items-center`}>
						{visitorLinks.map((link, index) => (
							<NavLink link={link} key={index} />
						))}
					</ul>
				</nav>
			)}
		</>
	);
};

export default Nav;
