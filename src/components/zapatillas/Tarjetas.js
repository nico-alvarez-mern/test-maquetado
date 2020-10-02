import React, { useEffect, useState } from 'react'
import uuid from 'uuid/dist/v4'
import { Producto } from './Producto';




export const Tarjetas = () => {

    const [zapatillas, setZapatillas] = useState([]);

    useEffect(() => {
        fetch( './zapatillas.json',  )
            .then( resp => resp.json() )
            .then( zapatillas => setZapatillas(zapatillas) )
            .catch( err => console.log(err) );
    }, []);


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
