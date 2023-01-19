import { Mangas } from './Mangas'
import { MangaCard } from './MangaCard';
import { useState } from 'react'

import './ct-tabs.css'

export const MangaTab = () => {
    const [MangasArray, setMangas] = useState(Mangas);

    return (
        <section className="mainbox">
            {
                MangasArray.map(Manga => {
                    return (
                        <MangaCard
                            key={Manga.id}
                            Titulo={Manga.Titulo}
                            Imagen={Manga.Imagen}
                            Estado={Manga.Estado}
                            Precio={Manga.Precio}
                        />
                    )
                })
            }
        </section>
    );
};