import React from 'react'
import style from './card.module.css'

const Card = (prop) => {
    return (
        <div className={style.card}>
            <p className={style.fish}>{prop.fish}</p>
            <img src={prop.src} alt={prop.fish}></img>
            <div>
                <p className={style.size}><i className="fa-solid fa-fish-fins"></i> {prop.size}</p>
                <p className={style.location}><i className="fa-solid fa-location-dot"></i> {prop.location}</p>
            </div>
            <p className={style.description}>{prop.description}</p>
        </div>
    )
}

export default Card