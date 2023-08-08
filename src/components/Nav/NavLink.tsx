import { ReactNode } from "react";
import { setSelectedNav } from "../../reducers/SelectedSlice";
import { useAppDispatch } from "../../store";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../util/hooks";
import { useAuth0 } from "@auth0/auth0-react";

type LinksType = {
	title: string;
	icon: ReactNode;
	link: string;
};

interface NavLinkProps {
	link: LinksType;
}

const NavLink = ({ link }: NavLinkProps): JSX.Element => {
	const selected = useAppSelector((state) => state.selected.nav);
	const dispatch = useAppDispatch();

	const { isAuthenticated, user } = useAuth0();

	const handleLinkClick = (linkName: string) => {
		dispatch(setSelectedNav(linkName));
	};

	const navLinkClasses =
		selected == link.title
			? "scale-105 text-lightPrimary"
			: "scale-90 text-lightSecIcon";

	return (
		<li
			className={`items-center justify-center text-3xl duration-200 ease-in-out hover:cursor-pointer ${navLinkClasses}`}
			onClick={() => handleLinkClick(link.title)}>
			<Link to={`${link.link.toLowerCase()}`}>
				{isAuthenticated && link.title == "Account" ? (
					<img
						src={user?.picture}
						alt=""
						className="w-8 rounded-full"
					/>
				) : (
					<span>{link.icon}</span>
				)}

				<span className={`hidden`}>{link.title}</span>
			</Link>
		</li>
	);
};

export default NavLink;
