import { AddRounded, Favorite, StarRounded, StartRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import {Items} from './Data'
import {useStateValue} from './StateProvider'
import {actionType} from './Reducer'
import Swal from 'sweetalert2'
import 'animate.css';
import logo1 from '../img/logo.png';

let cartData = []

const ItemsCard = ({imgSrc, name, ratings, price, itemId}) => {
    const [isfavourite, setIsfavourite] = useState(false)
    const [currentValue, setCurrentValue] = useState(Math.floor(ratings))
    const [isCart, setIsCard] = useState(null)
    const [{}, dispatch] = useStateValue()

    useEffect(() => {
        if(isCart){
            cartData.push(isCart)
            dispatch({
                type: actionType.SET_CART,
                cart: cartData
            })
            Swal.fire({
                title: 'Geniál!',
                text: `${name} Agregado al Carrito`,
                imageUrl: `${imgSrc}`,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                showConfirmButton: false,
                timer: 1900,
                showClass: {
                    popup: 'animate__animated animate__fadeInBottomLeft'
                    },
                    hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                    }
            })
        }
    }, [isCart])

    const handleClick = (value) => {
        setCurrentValue(value)
    }

    const handleFavourite = () => {
        setIsfavourite(!isfavourite)
        Swal.fire({
            title: 'Operación Exitosa!',
            text: `${name} Agregado a Favoritos`,
            imageUrl: `${logo1}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showConfirmButton: false,
            timer: 2000,
            showClass: {
                popup: 'animate__animated animate__rollIn'
                },
                hideClass: {
                popup: 'animate__animated animate__rollOut'
                }
        })

    }

  return (
    <div className="itemCard" id={itemId}>
        <div className={`isFavorite ${isfavourite ? "active" : ""}`} onClick={handleFavourite}>
            <Favorite/>
        </div>

        <div className="imgBox">
            <img src={imgSrc} alt="..." className="itemImg" />
        </div>

        <div className="itemContent">
            <h3 className="itemName">{name}</h3>
            <div className="bottom">
                <div className="ratings">
                    {Array.apply(null, {length: 5}).map((e, i) => (
                        <i key={i} className={`rating ${currentValue > i ? "orange" : "gray"}`} onClick={() => handleClick(i + 1)}>
                            <StarRounded />
                        </i>
                    ))}
                    <h3 className="price"><span>$ </span>{price}</h3>
                </div>
                <i className="addToCart" onClick={() => setIsCard(Items.find((n) => n.id === itemId))}>
                    <AddRounded />
                </i>
            </div>
        </div>
    </div>
  )
}

export default ItemsCard