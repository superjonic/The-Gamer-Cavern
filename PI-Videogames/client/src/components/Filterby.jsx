import React from 'react';
import { useSelector } from 'react-redux';

export default function FilterBy() {
    const videogames = useSelector((state) => state.videogames)
    //filtrar por genre
    //filtrar por videogame existente o creado por nosotros
    //puedo conectarme al store de redux, y aca filtrar los videogames
    return (
        <div>                   
            <h4>Filter By</h4>
            
        </div>
    )
}