import React from 'react';
import './gamedetail.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


export default function GameDetail (){
    const [game, setGame] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [readMore, setReadMore] = useState(false)
    //dispatchar una accion llamando a la ruta del back con el id o llamar al back con el id del juego
    const { id } = useParams()                      //platforms dbGames es una string. tengo que convertirla en un array para luego si poder hacer el map
   
    // function getVideogameById(id){
    //      setIsLoading(true)   
    //      axios.get(`http://localhost:3001/videogames/${id}`)
    //         .then((game) => {
    //             setGame(game.data)
    //             setIsLoading(false)
    //         })
    //         .catch(err => setIsLoading(false))
            
    //    }
    const getVideogameById = async () => {
        setIsLoading(true)
        try{
           const response = await axios.get(`http://localhost:3001/videogames/${id}`)
           
           setGame(response.data)
           setIsLoading(false)
        }
        catch (error){
            setIsLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getVideogameById(id) 
    }, [])
    
    console.log(game)
    
    // var arr = []
    // arr.push(Object.keys(game))
    if(isLoading){
        return (
            <div className ="tit">
                <h2>Loading...</h2>
            </div>
        )
    }
   
    return (
            <div>
                
              { 
                  
              game.name  ?        //esta mal esta expresion, no funciona, siempre es dist de cero
                  <div>
                    <div className ="tit"> 
                        <h1 >{game.name}</h1>

                        <div className ="contback">
                            <Link to= "/home">
                            <button className ="btnhome">Home</button>
                            </Link>
                        </div>
                        
                    </div>
                    <div className = 'contpyg'>
                    <div className ="contplat">
                        <h2>Platforms: </h2>
                         {  typeof game.platforms !== "string" ?
                                game.platforms.map((plat) => {      
                                return <p>{plat.platform.name}</p>       
                        })  : game.platforms.split(',').map( (plat) => {
                                return <p>{plat}</p>
                        })  
                        }
                        
                    </div>
                    <div className ="contgenr"> 
                            <h2>Genres</h2>
                            {game.genres.map(g => <p>{g.name}</p>)}
                        </div>    
                    </div> 
                         
                        <div className ="contimg">
                            <img src={game.background_image} alt="imagen" className ="image" /> 
                        </div>
                        <div className="continfo">

                            <p>{ readMore ? game.description.replace(/<\/?[^>]+(>|$)/g, "") : `${game.description.substring(0,300).replace(/<\/?[^>]+(>|$)/g, "")}`}
                                 <button onClick={() => {setReadMore(!readMore)}} className = "btnmore" >
                                    {readMore ? 'Show less' : '...Read more'}
                                 </button>
                            </p>

                        </div> 
                        <div className ="contextra">
                            <h2>Released: {game.released}</h2>
                            <h2>Rating: {game.rating}</h2>
                        </div>  
                  </div>
                  : <div className ="tit">
                         <h2>There is no game with that ID</h2>
                         <div className ="contback">
                         <Link to= "/home">
                         <button className ="btnhome">Back</button>
                         </Link>
                        </div>
                    </div>
              }
            </div> 
    )
}