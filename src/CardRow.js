import React from 'react'
import './CardRow.css'

function CardRow({ img, title, text }) {
    return (
        <div className="cardRow">
            <img src={img} alt="img"/>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CardRow
