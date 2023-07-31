import { ReactNode } from "react";
import { setSelectedNav } from "../../reducers/SelectedSlice";
import { useAppDispatch } from "../../store";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../util/hooks";

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
				<span>{link.icon}</span>
				<span className={`hidden`}>{link.title}</span>
			</Link>
		</li>
	);
};

export default NavLink;
