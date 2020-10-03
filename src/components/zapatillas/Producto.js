import React from 'react';
import './styles.css';

export const Producto = ({producto}) => {

    const { imagen, modelo, precio } = producto;

    return (
        <div className="card producto">
            <img src={imagen} class="card-img-top" alt="imagen zapatilla"/>
            <hr className="dividir" />
            <div className="contenedor-info">
                <p className="m-0">{modelo}</p>
                <p className="card-text font-weight-bold">{precio}</p>
            </div>
        </div>
    )
}
