import React from 'react';
import Gamecard from './GameCard';
// import { useState } from 'react';
import { useSelector } from 'react-redux'; //equivale a mapStateToProps

export default function Games (){
    // const [games, setGames] = useState([]);
    // const [input, setInput] = useState([]);
const videogames = useSelector((state) => state.videogames)
console.log(videogames)
    return (
        <div>
            <h3>Aca van las cards de Game</h3>
            {/* {
                videogames.map((g) => {
                    return <p>{videogames.results}</p>
                })
            } */}
           
            <Gamecard />
        </div>
    )
}