import React from 'react';
import './gamecard.css';

export default function Gamecard ({name, image, rating, genres}){ 
   console.log(genres)
   var gen = genres.map(g => g.name ).join(' | ')
   
   console.log(gen.charAt(0).toUpperCase().concat(gen.slice(1)))   
 
    return (
        <div className = "card">
            <h2>{name}</h2>
            {image ? <img src={image} alt="gameimage" className= "img" /> : <img src="" alt="" className= "imgdef" />}
            <div className = "genandrat"> 
                {gen && <p>{gen.charAt(0).toUpperCase().concat(gen.slice(1))}</p>} 
                <p className = "colorrating">{rating}</p>
            </div>     
        </div> 
    )
}