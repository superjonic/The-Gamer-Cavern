import React from 'react';
import Gamecard from './GameCard';
import { useState } from 'react';
// import { useSelector } from 'react-redux'; equivale a mapstatetoprops

export default function Games (){
    const [games, setGames] = useState([]);
    const [input, setInput] = useState([]);


    return (
        <div>
            <h3>Aca van las cards de Game</h3>
            
            { !games ? <p>Hola</p> : <p>Chau</p>}
            <Gamecard />
        </div>
    )
}