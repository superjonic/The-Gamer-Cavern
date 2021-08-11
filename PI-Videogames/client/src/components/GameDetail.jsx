import React from 'react';
import './gamedetail.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


export default function GameDetail (){
    const [game, setGame] = useState({});
    //dispatchar una accion llamando a la ruta del back con el id o llamar al back con el id del juego
    const { id } = useParams()
   
    function getVideogameById(id){
         axios.get(`http://localhost:3001/videogames/${id}`)
            .then((game) => {
                setGame(game.data)
            } )
            
       }
    
    useEffect(() => {
        getVideogameById(id) 
    }, [])
    
    console.log(game)
    // var arr = []
    // arr.push(Object.keys(game))
    return (
            <div>
                
              {
                  
              Object.keys(game).length !== 0  ?        //esta mal esta expresion, no funciona, siempre es dist de cero
                  <div>
                    <div className ="tit"> 
                        <h1 >{game.name}</h1>

                        <div className ="contback">
                            <Link to= "/home">
                            <button className ="btnhome">Home</button>
                            </Link>
                        </div>
                        
                    </div>
                    <div className ="contextra">
                        <h2>{game.rating}</h2>
                         {game.platforms.map((plat) => {      
                            return <p>{plat.platform.name}</p>
                        })}
                    </div> 
                        <div className ="contextra">
                            <h3> Released {game.released}</h3>
                        </div>   
                        <div className ="contimg">
                            <img src={game.background_image} alt="imagen" className ="image" /> 
                        </div>
                        <div className="continfo">
                            <p>{game.description}</p>
                        </div> 
                  </div>
                  : <h2>Loading</h2>
              }
            </div> 
    )
}