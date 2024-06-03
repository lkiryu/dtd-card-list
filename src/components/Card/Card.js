import style from './Card.module.css'

const Card = (prop) => {
    return (
        <div class={style.card}>
            <p class={style.fishName}>{prop.fish}</p>
            <img src={prop.src} alt={prop.alt}></img>
            <div>
                <p class={style.size}><i class="fa-solid fa-fish-fins"></i> {prop.size}</p>
                <p class={style.location}><i class="fa-solid fa-location-dot"></i> {prop.location}</p>
            </div>
            <p class={style.description}>{prop.description}</p>
        </div>
    )
}

export default Card