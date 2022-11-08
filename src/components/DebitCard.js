import React from 'react'
import visa from '../img/visa.png'
import chip from '../img/chip.png'

const DebitCard = () => {
  return (
    <div className="cardGroup">
      <img
      src={visa}
      alt="..."
      className="card_logo" />
      
      <img
      src={chip}
      alt=""
      className="card_chip" />

      <div className="card_number">1234 567 8910 1112</div>
      <div className="card_name">Matias Toniolo</div>
      <div className="card_from">11/22</div>
      <div className="card_to">10/25</div>
      <div className="card_ring"></div>
    </div>
  )
}

export default DebitCard