import React from 'react'
import './Card.css'

function Card({img , title, text}) {
    return (
        <div className="card">
            <img src={img} alt="img"/>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Card 
