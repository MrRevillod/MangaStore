import '../styles/Navbar.css'
import { DropdownMenu } from './DropdownMenu'
import { SearchBar } from './SearchBar';

export const TopNavbar = ({ iconFilter }) => {

    const items = [
        "Predeterminado", "A - Z",
        "Ordenar por precio menor a mayor",
        "Ordenar por precio mayor a menor"
    ]

    return (
        <nav className="nav-bar__main-div" >

            <div className="nav-bar__div">

                <div className="nav-bar__title-div">
                    <h3 className="nav-bar__title">Catálogo</h3>
                </div>

                <SearchBar />

                <DropdownMenu
                    iconFilter={iconFilter}
                    textFilter="Filtrar contenido"
                    listItems={items}
                />
            </div>
            <hr />

        </nav>
    )
}