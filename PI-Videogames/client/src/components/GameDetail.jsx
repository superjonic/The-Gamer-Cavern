import React from 'react';
import './gamedetail.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function GameDetail (){
    const [game, setGame] = useState({})
    //dispatchar una accion llamando a la ruta del back con el id o llamar al back con el id del juego
    const { id } = useParams()
   
  

    useEffect(() => {
        async function getVideogameById(id){
            const game = await axios.get(`http://localhost:3001/videogames/${id}`)
              setGame(game.data)
           }
        getVideogameById(id)
    })
    console.log(id)
    return (
        <div className ="back">
            
                {
                  <h1>{game.name}</h1>

                }
            
        </div>
    )
}