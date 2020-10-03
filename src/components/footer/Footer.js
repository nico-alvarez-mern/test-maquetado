import React from 'react';
import './styles.css';

const navbarStyles = {
    backgroundColor: '#24182b'
}

const mobileFooter = "d-flex justify-content-center flex-column";
const footerBigScreen = "justify-content-around";

export const Footer = ({windowsWidth={windowsWidth}}) => {
    return (
        <footer className="footer mt-5">
            <nav class="navbar" style={navbarStyles}>
                <div className={`container ${ (windowsWidth > 768) ? footerBigScreen : mobileFooter }`}>
                    <a class="link" href="#">Ayuda</a>
                    <a class="link" href="#">Contacto</a>
                    <a class="link" href="#">Terminos y condiciones</a>
                    <a class="link" href="#">Politicas de privacidad</a>
                </div>
            </nav>
        </footer>
    )
}
