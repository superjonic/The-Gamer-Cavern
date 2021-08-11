import React from 'react';
import './gamecard.css';

export default function Gamecard ({name, image, rating, genres}){

   var gen = genres.map(g => g.name).join(' | ')
   console.log(gen)
    return (
        <div className = "card">
            <h2>{name}</h2>
            <img src={image} alt="gameimage" className= "img" />
            <p>{rating}</p>
            <p>{gen}</p>
        </div>
    )
}