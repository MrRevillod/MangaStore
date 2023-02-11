import { Fragment } from 'react'
import '../styles/Paginacion.css'

export const Paginacion = ({ Page, setPage, MaxOfTabs }) => {

    const prevPage = () => {
        Page > 1 ? setPage(Page - 1) : setPage(Page)
    }

    const nextPage = () => {
        Page < MaxOfTabs ? setPage(Page + 1) : setPage(Page)
    }

    return (
        <>
            <div className="paginacion-div">
                <button key="prev-btn" className="pag-buttons" onClick={prevPage}>
                    <img src="/src/assets/btn-left.png" alt="prev" />
                </button>

                <p className="pag-number">{Page} de {MaxOfTabs}</p>

                <button key="next-btn" className="pag-buttons" onClick={nextPage}>
                    <img src="/src/assets/btn-right.png" alt="next" />
                </button>
            </div >
            <hr />
        </>
    )
}