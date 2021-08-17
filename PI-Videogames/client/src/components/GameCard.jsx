import React from 'react';
import './gamecard.css';

export default function Gamecard ({name, image, rating, genres}){ //genres viene de la api, no de la db
   console.log(genres)
   var gen = genres.map(g => g.name ).join(' | ')
   
   console.log(gen.charAt(0).toUpperCase().concat(gen.slice(1)))   
   //el genres que viene de dbGames es undefined por eso se rompe el map, NECESITO ASOCIAR LAS TABLAS
    return (
        <div className = "card">
            <h2>{name}</h2>
            <img src={image} alt="gameimage" className= "img" />
            <div className = "genandrat"> 
                {gen && <p>{gen.charAt(0).toUpperCase().concat(gen.slice(1))}</p>} 
                <p className = "colorrating">{rating}</p>
            </div>     
        </div> 
    )
}

// el map a genres funciona, pero no cuando haces una busqueda