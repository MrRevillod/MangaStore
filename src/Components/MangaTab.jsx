import { useState } from 'react'
import { useFetchData } from '../utils/useFetchData'

import { MangaCard } from './MangaCard';
import { Paginacion } from './Paginacion';

import '../styles/MangaTab.css'

const calculateMaxofTabs = (Mangas, NumPerPage) => {

    let MaxOfTabs = Math.trunc(Mangas.length / NumPerPage)
    let rest = Mangas.length % NumPerPage

    rest > 0 ? MaxOfTabs += 1 : MaxOfTabs

    return MaxOfTabs
};

export const MangaTab = () => {

    const [Page, setPage] = useState(1)
    const [NumPerPage, setNumPerPage] = useState(12)


    //URL - Local y Deploy

    const localURL = 'http://localhost:3000/api/mangas'
    const deployURL = 'https://mangastore-api-production.up.railway.app/api/mangas'

    const Mangas = useFetchData(deployURL,
        'GET', {
        'Content-Type': 'application/json'
    })

    const MaxOfTabs = calculateMaxofTabs(Mangas, NumPerPage)
    const dataSlice = Mangas.slice((Page - 1) * NumPerPage, (Page - 1) * NumPerPage + NumPerPage)

    return (
        <article>
            <section className="mainbox">

                {dataSlice.map((Manga, index) => {
                    return (
                        <MangaCard
                            key={index}
                            Titulo={Manga.Titulo}
                            Autor={Manga.Autor}
                            Background={Manga.Background}
                            Imagen={Manga.Imagen}
                            Precio={Manga.Precio}
                            likeIco='/src/assets/icons/ico-like.png'
                            unlikeIco='/src/assets/icons/ico-liked.png'
                        />
                    )
                })}

            </section>

            <Paginacion Page={Page} setPage={setPage} MaxOfTabs={MaxOfTabs} />

        </article>
    )
}
