import React from 'react';
import './styles.css';

const navbarStyles = {
    backgroundColor: '#24182b', 
    height: '80px'
}

export const Navbar = ({windowsWidth,setOpen}) => (
    
    <nav className="navbar" style={navbarStyles}>
        <div className="container">
            <img 
                src="./assets/iconos/bars-solid.svg" 
                className="logo-bars-solid"
                alt="boton menu"
                style={{  visibility: `${(windowsWidth <= 768) ? '' : 'hidden' }` }}
                onClick={ ()=> setOpen(true) }
            />
            <img 
                src="./assets/logo.svg" 
                className="logo-principal"
                alt="Icono principal"
            />
            <div>
                {
                    (windowsWidth > 768) &&
                    <>
                        <img 
                            src="./assets/iconos/search-solid.svg" 
                            className="logo-full-screen"
                            alt="boton carrito"
                        />
                        <img 
                            src="./assets/iconos/user-solid.svg" 
                            className="logo-full-screen"
                            alt="boton carrito"
                            style={{margin: '10px'}}
                        />
                    </>
                }
                <img 
                    src="./assets/iconos/shopping-cart-solid.svg" 
                    className={(windowsWidth > 768) ? "logo-full-screen" : "logo-shopping-solid"}
                    alt="boton carrito"
                />
            </div>
        </div>
        {
            (windowsWidth > 768) &&
            <div className="container d-flex justify-content-around mt-1">
                <a className="link">SALE</a>
                <a className="link">E-SHOP</a>
                <a className="link">LOOKBOOK</a>
                <a className="link">CAMPAÑA</a>
                <a className="link">LOCALES</a>
            </div>
        }
    </nav>
    
)
