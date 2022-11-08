import React, { useEffect } from 'react'
import {SearchRounded, ShoppingCartRounded, BarChart} from '@mui/icons-material'
import logo from '../img/logo.png'
import profile from '../img/profile.jpg'
import { useStateValue } from "./StateProvider";

const Header = () => {
    const [{ cart }, dispatch] = useStateValue();

    // useEffect(() => {
    //     const toogleIcon = document.querySelector(".toogleMenu");
    //     toogleIcon.addEventListener("click", () => {
    //         document.querySelector(".rightMenu").classList.toogle("active")
    //     })  
    // }, [])

    const too = () => {
        const toogleIcon = document.querySelector(".toogleMenu");
        toogleIcon.classList.toggle("active")
        document.querySelector(".rightMenu").classList.toggle("active")

    }

  return (
    <header>
        <img src={logo} alt="logo" className="logo" />
        <div className="inputBox">
            <SearchRounded className="iconSearch"/>
            <input type="text" placeholder="Buscar" />
        </div>

        <div className="shoopingCart">
            <ShoppingCartRounded className="cart" />
            <div className="cart-content">
                <p>{cart ? cart.length : 0}</p>
            </div>
        </div>

        <div className="profileContainer">
            <div className="imgBox">
                <img src={profile} alt="profile" className="profilePick" />
            </div>
            <h2 className="userName">Matias Toniolo</h2>
        </div>

        <div className="toogleMenu" onClick={() => too()}>
            <BarChart className="toogleIcon" />
        </div>
    </header>
  )
}

export default Header