import { ReactNode } from "react"
import {FaUser, FaCalendarAlt, FaBook, FaClipboardList, FaUserFriends} from "react-icons/fa"
import NavLink from "./NavLink"

interface LinksInterface {
    title: string,
    icon: ReactNode,
}

const Nav = () => {
    const links:LinksInterface[] = [
        {title: "Plan", icon: <FaCalendarAlt />},
        {title: "Recipes", icon: <FaBook />},
        {title: "Groceries", icon: <FaClipboardList />},
        {title: "Collaborate", icon: <FaUserFriends />},
        {title: "Account", icon: <FaUser/>},
    ]
  return (
    <nav>
        <h1>Recipe Box</h1>
        <ul>
            {links.map((link) => (
                <NavLink link={link}/>
            ))}
        </ul>

    </nav>
  )
}

export default Nav