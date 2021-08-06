import React from 'react';
import Gamecard from './GameCard';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'; //equivale a mapStateToProps

export default function Games (){

const videogames = useSelector((state) => state.videogames)
var nineResults = videogames.slice(0, 9)
console.log(nineResults)

    return (
        <div>
            <h3>Aca van las cards de Game</h3>
                {
                    nineResults.map((g) => {
                        return (
                        <Link to = "/gamedetail">
                            <Gamecard name={g.name} image={g.image} rating={g.rating}/>
                        </Link>
                        )
                    })
                }
           
            <Gamecard />
        </div>
    )
}