import React from 'react';
import Gamecard from './GameCard';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'; //equivale a mapStateToProps
import './games.css'

export default function Games (){

const videogames = useSelector((state) => state.videogames)

var n1 = Math.floor(Math.random()* 6);
var n2 = n1 + 9;
var nineResults = videogames.slice(n1, n2)
console.log(videogames)

    return (
        <>
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
        </>
    )
}