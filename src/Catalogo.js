import React, {useEffect,useState} from 'react';
import { Filtros } from './components/filtros/Filtros';
import { Navbar } from './components/navbar/Navbar';
import { SideBar} from './components/sidebar/SideBar';
import { Tarjetas } from './components/zapatillas/Tarjetas';

export const Catalogo = () => {

    //Obtengo el tamaño de la pantalla actual y estoy atento a sus cambios
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
    //Abrir y cerrar la barra lateral
    const [open, setOpen] = useState(false);

    //Agrego el event listener solo en su primera renderizacion, si el componente
    //es destruido hago limpieza del event listener que agregue
    useEffect(() => {
        const resize = ()=>{
            setWindowsWidth( window.innerWidth );
        }
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        }
    }, []);

    return (
        <>
            <Navbar windowsWidth={windowsWidth} setOpen={setOpen}/>
            <SideBar open={open} setOpen={setOpen}/>
            <div className="container row mt-4 ml-auto mr-auto mb-2" style={{backgroundColor: '#fafafa'}}>
                {
                    (windowsWidth > 768) && //Los filtros aparecen despues del tamaño 768
                    <div className="col col-3">
                        <Filtros />
                    </div>
                }
                <div className={(windowsWidth > 768) ? "col col-9" : "col col-12"}>
                    <Tarjetas />
                </div>
            </div>    
        </>
    )
}
