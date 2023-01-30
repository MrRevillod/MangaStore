import '../styles/Header.css';
import '../styles/dark-mode-sw.css';

const DarkModeSW = () => {
    const tag = document.getElementsByTagName("body")[0];
    return (
        <div className="hd-dark-switcher">
            <input type="checkbox" className="hd-toggle" onClick={() => tag.classList.toggle("dark-theme")} />
        </div>
    );
};

export const Header = ({ Title }) => {
    return (
        <header className="header">
            <div className="header-menu-div">
                <img className="hd-menu-img" src="../../src/assets/icons/hd-menu-ico.png" alt="menu-ico" width="35px"
                    onClick={() => Side.classList.toggle("sidebar-none")} />
            </div>
            <h1 className="hd-title">{Title}</h1>
            <DarkModeSW />
        </header>
    );
};