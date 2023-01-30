import '../styles/Navbar.css'

export const TopNavbar = () => {
    return (
        <div className="nav-main-div" >
            <div className="navbar-div">

                <div className="nav-title-div">
                    <h3 className="nav-title-h3">Catálogo</h3>
                </div>

                <div className="nav-search-div">
                    <input type="text" className="nav-input" placeholder="Buscar..." />
                    <div className="nav-button btn_common">
                        <i className="fas fa-search"></i>
                    </div>
                </div>

                <div className="nav-filter-div">
                    <select className="nav-select">
                        <option value="">Nombre</option>
                        <option value="">Precio</option>
                    </select>
                </div>
            </div>
            <hr />
        </div>
    );
}; 