import React from 'react'
import './styles.css';
export const Filtros = () => {
    return (
        <div>
            <h4 className="titulo font-weight-bold">Zapatillas</h4>
            <hr className="dividir" />
            <p className="font-weight-bold mt-2 mb-1">Filtrar</p>
            <ul className="lista ml-3">
                <li className="font-weight-bold sub-titulo">
                    Categoria
                </li>
                <li>Zapatillas</li>
                <li>Zapatos</li>
                <li>Botas</li>
                <li>Sandalias</li>
                <li>Pantuflas</li>
            </ul>
            <ul className="lista ml-3"> 
                <li className="font-weight-bold sub-titulo">
                    Talle
                </li>
                <li>36</li>
                <li>38</li>
                <li>40</li>
                <li>42</li>
                <li>44</li>
            </ul>
            <ul className="lista ml-3"> 
                <li className="font-weight-bold sub-titulo">
                    Color
                </li>
                <li>Amarillo</li>
                <li>Negro</li>
                <li>Verde</li>
                <li>Azul</li>
            </ul>
        </div>
    )
}
