import React from 'react';
import styles from'./gamecard.module.css';

export default function Gamecard ({name, image, rating, genres}){ 
   console.log(genres)
   var gen = genres.map(g => g.name.charAt(0).toUpperCase().concat(g.name.slice(1))).join(' | ')
   
   console.log(gen.charAt(0).toUpperCase().concat(gen.slice(1)))   
 
    return (
        <div className = {styles.card}>
            <h2>{name}</h2>
            {image ? <img src={image} alt="gameimage" className= {styles.img} /> : <img src="" alt="" className= {styles.imgdef} />}
            <div className = {styles.genandrat}> 
                {gen && <p>{gen}</p>} 
                <p className = {styles.colorrating}>{rating}</p>
            </div>     
        </div> 
    )
}