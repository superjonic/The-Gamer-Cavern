import React from 'react';
import Gamecard from './GameCard';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'; //equivale a mapStateToProps
import './games.css'

export default function Games (){

const videogames = useSelector((state) => state.videogames)
var nineResults = videogames.slice(0, 9)
console.log(nineResults)

    return (
        <div className = "cards">
        
                {
                    nineResults.map((g) => {
                        return (
                        <Link to = "/gamedetail">
                            <Gamecard name={g.name} image={g.image} rating={g.rating}/>
                        </Link>
                        )
                    })
                }
           
            
        </div>
    )
}