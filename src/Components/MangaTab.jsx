import { useState, useEffect } from 'react'

import { MangaCard } from './MangaCard';
import { Paginacion } from './Paginacion';

import '../styles/MangaTab.css'

export const MangaTab = () => {

    const [Mangas, setMangas] = useState([])

    const getMangas = async () => {
        const url = 'http://localhost:3000/api/mangas'

        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })

        const Mangas = await response.json()
        setMangas(Mangas)
    }

    useEffect(() => {
        getMangas()
    })


    const [Page, setPage] = useState(1)
    const [NumPerPage, setNumPerPage] = useState(9)

    let MaxOfTabs = Math.trunc(Mangas.length / NumPerPage)
    let rest = Mangas.length % NumPerPage

    rest > 0 ? MaxOfTabs += 1 : MaxOfTabs
    const dataSlice = Mangas.slice((Page - 1) * NumPerPage, (Page - 1) * NumPerPage + NumPerPage)

    return (
        <>
            <section className="mainbox">
                {dataSlice.map((Manga, index) => {
                    return (
                        <MangaCard
                            key={index}
                            Titulo={Manga.Titulo}
                            Imagen={Manga.Imagen}
                            Stock={Manga.Stock}
                            Precio={Manga.Precio}
                        />
                    )
                })}
            </section>

            <Paginacion Page={Page} setPage={setPage} MaxOfTabs={MaxOfTabs} />
        </>
    )
}