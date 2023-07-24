import { ReactNode } from "react"
import {FaUser, FaCalendarAlt, FaBook, FaClipboardList, FaUserFriends} from "react-icons/fa"
import NavLink from "./NavLink"

interface LinksInterface {
    title: string,
    icon: ReactNode,
    link: string,
}

const Nav = () => {
    const links: LinksInterface[] = [
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
  return (
    <nav className={`h-16 fixed bottom-0 w-full bg-lightSurfCon`}>
        <h1 className={`hidden`}>Recipe Box</h1>
        <ul className={`flex justify-evenly h-full items-center`}>
            {links.map((link, index) => (
                <NavLink link={link} key={index}/>
            ))}
        </ul>

    </nav>
  )
}

export default Nav