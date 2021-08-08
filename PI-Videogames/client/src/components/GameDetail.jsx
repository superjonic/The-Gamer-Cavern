import React from 'react';
import './gamedetail.css';
import { useSelector } from 'react-redux';


export default function GameDetail ({id}){
    const games = useSelector((state) => state.videogames)
    //dispatchar una accion llamando a la ruta del back con el id o llamar al back con el id del juego
    console.log(games)

    return (
        <div className ="back">
            
                {   
                    games.filter((game) => {
                        return game.id = id;
                    }).map((game) => {
                        
                        return (
                            <div className ="container">
                                <h1>{game.name}</h1>
                                <p>{game.description}</p>
                            </div>    
                        )
                    })
                }
            
        </div>
    )
}