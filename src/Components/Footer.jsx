import '../styles/Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-media-logos">
                <a href="https://www.instagram.com/"><img src="/src/assets/icons/ig-icon.png" width="25px" /></a>
                <a href="https://www.tiktok.com/es/"><img src="/src/assets/icons/tiktok-icon.png" width="25px" /></a>
                <a href="https://web.whatsapp.com/" ><img src="/src/assets/icons/whatsapp-icon.png" width="25px" /></a>
            </div>
            <div>
                <p>© 2023 - Todos los derechos reservados</p>
                <hr />
            </div>
        </footer>
    )
}