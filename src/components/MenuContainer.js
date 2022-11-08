import React from 'react'

const MenuContainer = ({icon, link, isHome}) => {
  return (
    <li className={isHome ? "active" : ""}>
        <a href={link}>
            <span className="icon">{icon}</span>
        </a>
    </li>
  )
}

export default MenuContainer