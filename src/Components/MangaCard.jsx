import '../styles/MangaCard.css'
import '../styles/MangaCard_Info.css'

import { useEffect, useState, } from 'react'

const FormatPrice = Price => `$${Price}`

export const MangaCard = ({ Imagen, Background, Titulo, Autor, Precio, likeIco, unlikeIco }) => {

    const [showInfo, setShowInfo] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const modalTarget = (e) => e.target.className !== 'bottom__details-btn' ? setShowInfo(false) : null;

    useEffect(() => {
        document.addEventListener('click', modalTarget);

        return () => {
            document.removeEventListener('click', modalTarget);
        };
    }, []);

    return (
        <div className="manga-card">
            <div className="manga-card__img-box" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${Background})` }}>

                <img className={`manga-card__image ${showInfo ? 'gray' : 'nogray'}`} src={Imagen} />

                <div className={`manga-card__info ${showInfo ? 'show' : 'hide'}`}>
                    <h4>{Titulo}</h4>
                    <p>{Autor}</p>
                    <h4>{FormatPrice(Precio)}</h4>
                </div>

            </div>

            <div className="manga-card__bottom">

                <button className="bottom__details-btn" onClick={() => setShowInfo(!showInfo)}>View details</button>
                <button className="bottom__wish-btn" onClick={() => setIsLiked(!isLiked)}>
                    <img className="wish__btn-img" alt={isLiked ? 'unlike' : 'like'} width="28px" src={isLiked ? unlikeIco : likeIco} />
                </button>

            </div>

        </div>
    )
}