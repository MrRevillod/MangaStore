import '../styles/Navbar.css'
import { useState } from 'react';

export const TopNavbar = ({ imgDeploy }) => {

    return (
        <nav className="nav-bar__main-div" >
            <div className="nav-bar__div">

                <div className="nav-bar__title-div">
                    <h3 className="nav-bar__title">Catálogo</h3>
                </div>

                <div className="nav-bar__search-div">
                    <input type="text" className="search-bar__input" placeholder="Buscar..." />
                    <div className="search-bar__button btn_common">
                        <i className="fas fa-search"></i>
                    </div>
                </div>

                <div className="nav-bar__filter-div">
                    <div className='filter__main-div'>
                        <p>Filtrar contenido</p>
                        <img src={imgDeploy} alt="" width={'20px'} />
                    </div>
                    <div className="filter__sub-div">
                        <p>Option</p>
                    </div>
                    <div className="filter__sub-div">
                        <p>Option</p>
                    </div>
                    <div className="filter__sub-div">
                        <p>Option</p>
                    </div>
                </div>
            </div>
            <hr />
        </nav>
    );
};




