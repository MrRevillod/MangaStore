import { useState } from "react"

export const SearchBar = () => {

    const [search, setSearch] = useState("");

    return (
        <div className="nav-bar__search-div">
            <input
                type="text" className="search-bar__input"
                placeholder="Buscar..." onChange={() => setSearch("")}
            />
            <div className="search-bar__button btn_common">
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}