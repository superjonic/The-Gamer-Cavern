import React from 'react';
import Gamecard from './GameCard';
// import { useState } from 'react';
import { useSelector } from 'react-redux'; //equivale a mapStateToProps

export default function Games (){

const videogames = useSelector((state) => state.videogames)
console.log(videogames)
    return (
        <div>
            <h3>Aca van las cards de Game</h3>
                {
                    videogames.map((g) => {
                        return (
                        <div>
                         <h2>{g.name}</h2>
                         <img src={g.image} alt="" />
                         </div>
                        )
                    })
                }
           
            <Gamecard />
        </div>
    )
}