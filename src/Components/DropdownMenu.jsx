import React, { useState, useEffect } from "react"

export const DropdownMenu = ({ iconFilter, textFilter, listItems, onItemClick }) => {

    //Estado `showMenu` que indica si el menú desplegable está visible o no
    const [showMenu, setShowMenu] = useState(false)

    // manejo de eventos que controla el comportamiento del menú desplegable
    const handleClick = (event) => {
        setShowMenu(!showMenu)
        event.stopPropagation()
    }

    // useEffect se utiliza para detectar eventos de click fuera del componente
    useEffect(() => {
        const handleDocumentClick = (event) => {
            const isClickInside = event.target.closest(".filter__main-div");

            (!isClickInside && showMenu) ? setShowMenu(false) : null
        }

        // se agrega un controlador de eventos de clic al documento
        document.addEventListener("click", handleDocumentClick)

        return () => {
            document.removeEventListener("click", handleDocumentClick)
        }
    }, [showMenu])

    return (
        <div className="nav-bar__filter-div">
            <div className="filter__main-div" onClick={handleClick}>
                <p>{textFilter}</p>
                <img src={iconFilter} alt="" width="20px" />
            </div>

            {/* se muestra el menú desplegable si el estado `showMenu` es verdadero */}

            {showMenu && (
                <div className="filter__sub-div">

                    {/* se muestran los elementos de la lista de `listItems` */}

                    {listItems.map((item, index) => (
                        <p key={index} >{item}</p>
                    ))}

                </div>
            )}
        </div>
    )
}