import React from 'react';
import './gamecard.css';

export default function Gamecard ({name, image, rating, genres}){ //genres viene de la api, no de la db

//    var gen = genres.map(g => g.name).join(' | ')
   console.log(genres)   
   //el genres que viene de dbGames es undefined por eso se rompe el map, NECESITO ASOCIAR LAS TABLAS
    return (
        <div className = "card">
            <h2>{name}</h2>
            <img src={image} alt="gameimage" className= "img" />
            <p>{rating}</p>
            {/* {gen && <p>{gen}</p>}  */}
        </div> 
    )
}

// el map a genres funciona, pero no cuando haces una busqueda