import '../styles/MangaCard.css'

export const MangaCard = (props) => {
    const FormatPrice = `$${props.Precio}`

    return (
        <div className="manga-card">
            <div className="manga-card__title">
                <h3>{props.Titulo}</h3>
            </div>

            <div className="img-box">
                <img className="manga-card__image" src={props.Imagen} alt={props.Titulo} />
            </div>

            <div className="manga-card__description">
                <h4>Stock: {props.Stock}</h4>
                <h3 className="manga-card_price">{FormatPrice}</h3>
            </div>
        </div>
    );
};