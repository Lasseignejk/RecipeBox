import React, { ReactNode } from 'react'
import { setSelected } from '../../reducers/SelectedSlice'
import { useAppDispatch } from '../../store'

type LinksType = {
    title: string,
    icon: ReactNode,
}

interface NavLinkProps {
    link: LinksType
}

const NavLink = ({link}:NavLinkProps):JSX.Element => {
    const dispatch = useAppDispatch()
    
    const handleLinkClick = (linkName:string) => {
        dispatch(setSelected(linkName))
    }

  return (
    <li onClick={() => handleLinkClick(link.title)}>
        <span>{link.icon}</span>
        <span>{link.title}</span>
    </li>
  )
}

export default NavLink