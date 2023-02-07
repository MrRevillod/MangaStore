import '../styles/MangaCard.css'

import { useEffect, useState } from 'react'

export const MangaCard = (props) => {

    const [showInfo, setShowInfo] = useState(false);

    const FormatPrice = `$${props.Precio}`

    const modalTarget = (e) => { if (e.target.className !== 'Cart-Button') setShowInfo(false) }

    useEffect(() => { document.addEventListener('click', modalTarget) }, [])

    return (
        <div className="manga-card">
            <div className="img-box" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${props.Background})` }}>

                <img className={`manga-card__image ${showInfo ? 'blur' : 'noblur'}`} src={props.Imagen} />

                <div className={`Modal-Info ${showInfo ? 'show' : 'hide'}`}>
                    <h4>{props.Titulo}</h4>
                    <h5>{FormatPrice}</h5>
                </div>
            </div>

            <div className="manga-card__bottom">
                <button className="Cart-Button" onClick={() => setShowInfo(!showInfo)}>View details</button>
                <button className="Wish-Button" >
                    <img className="Wish-Heart" src="/src/assets/icons/ico-like.png" alt="" width="28px" />
                </button>
            </div>

        </div>
    )
}