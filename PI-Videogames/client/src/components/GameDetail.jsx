import React from 'react';
import './gamedetail.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


export default function GameDetail (){
    const [game, setGame] = useState({})
    //dispatchar una accion llamando a la ruta del back con el id o llamar al back con el id del juego
    const { id } = useParams()
   
    console.log(game)
    useEffect(() => {
        async function getVideogameById(id){
            const game = await axios.get(`http://localhost:3001/videogames/${id}`)
              setGame(game.data)
           }
        getVideogameById(id)
    })
    console.log(id)
    return (
            <div>
                <Link to= "/home">
                <button className ="btnhome">Home</button>
                </Link>
              {
                  game ?
                  <div>
                    <div className ="tit"> 
                        <h1 >{game.name}</h1>
                    </div> 
                        <div className ="contimg">
                            <img src={game.background_image} alt="imagen" className ="image" /> 
                        </div>
                        <div className="continfo">
                            <p>{game.description}</p>
                        </div> 
                  </div>
                  : <h2> There is no game with that id. Sorry!</h2>
              }
            </div> 
    )
}