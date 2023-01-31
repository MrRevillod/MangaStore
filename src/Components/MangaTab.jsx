import { useState } from 'react'

import { Mangas } from '../data/Mangas'
import { MangaCard } from './MangaCard';
import { Paginacion } from './Paginacion';

import '../styles/MangaTab.css'

export const MangaTab = () => {

    const [Page, setPage] = useState(1)
    const [NumPerPage, setNumPerPage] = useState(9)

    let MaxOfTabs = Math.trunc(Mangas.length / NumPerPage)
    let rest = Mangas.length % NumPerPage

    rest > 0 ? MaxOfTabs += 1 : MaxOfTabs
    const dataSlice = Mangas.slice((Page - 1) * NumPerPage, (Page - 1) * NumPerPage + NumPerPage)

    return (
        <>
            <section className="mainbox">
                {dataSlice.map(Manga => {
                    return (
                        <MangaCard
                            key={Manga.id}
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