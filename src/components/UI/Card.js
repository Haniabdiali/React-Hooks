import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='cards'>
        <div className='card-content'>
            <img src = {props.images} alt= "person" />
            <h3>{props.name}</h3>
            <p> {props.text}</p>
       </div>
    </div>
  )
}
export default Card