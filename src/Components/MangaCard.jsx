import '../styles/MangaCard.css'

import { useEffect, useState } from 'react'

export const MangaCard = (props) => {

    const [showInfo, setShowInfo] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const FormatPrice = `$${props.Precio}`

    const modalTarget = (e) => { if (e.target.className !== 'bottom__details-btn') setShowInfo(false) }

    useEffect(() => { document.addEventListener('click', modalTarget) }, [])

    return (
        <div className="manga-card">
            <div className="manga-card__img-box" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${props.Background})` }}>

                <img className={`manga-card__image ${showInfo ? 'gray' : 'nogray'}`} src={props.Imagen} />

                <div className={`manga-card__info ${showInfo ? 'show' : 'hide'}`}>
                    <h4>{props.Titulo}</h4>
                    <h5>{FormatPrice}</h5>
                </div>
            </div>

            <div className="manga-card__bottom">
                <button className="bottom__details-btn" onClick={() => setShowInfo(!showInfo)}>View details</button>
                <button className="bottom__wish-btn" onClick={() => setIsLiked(!isLiked)}>
                    <img className="wish__btn-img" alt="" width="28px"
                        src={isLiked ? '/src/assets/icons/ico-liked.png' : '/src/assets/icons/ico-like.png'}
                    />
                </button>
            </div>

        </div>
    )
}