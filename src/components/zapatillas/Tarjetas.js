import React, { useEffect, useState } from 'react'
import uuid from 'uuid/dist/v4'
import { Producto } from './Producto';

export const Tarjetas = ({filtro}) => {

    const [datosBase, setDatosBase] = useState([]);
    const [zapatillas, setZapatillas] = useState([]);
    const { color, categoria, talle } = filtro;
    
    useEffect(() => {
        fetch( './zapatillas.json',  )
            .then( resp => resp.json() )
            .then( zap => {
                setDatosBase(zap);
                setZapatillas(zap);
            })
            .catch( err => console.log(err) );
    }, []);

    useEffect( ()=>{
        if(color !== ""){
            setZapatillas(
                datosBase.filter( ( zapatilla)=> zapatilla.color === color )
            );
        }else{
            setZapatillas(datosBase);
        }
    },[color, categoria, talle])

    return (
        <div className="row d-flex justify-content-around">
            {
                zapatillas.map( p=>(
                    <Producto 
                        key={uuid()}
                        producto={p}
                    />
                ))
            }    
        </div>
    )
}
