import React from 'react'

const BannerName = ({name, discount, link}) => {
  return (
    <div className="bannerContent">
      <h2>Hola {name}!</h2>
      <p>
        Aprovecha el descuento de <span>${discount}</span> en tu compra!🔥
      </p>
      <a href={link}>Descubre más...</a>
    </div>
  )
}

export default BannerName