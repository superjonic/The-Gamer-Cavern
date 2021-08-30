import React from 'react';
import styles from './gamedetail.module.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


export default function GameDetail (){
    const [game, setGame] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [readMore, setReadMore] = useState(false)

    const { id } = useParams()          
   
    const getVideogameById = async () => {
        
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
    
    if(isLoading){
        return (
            <div className ={styles.tit}>
                <h2>Loading...</h2>
            </div>
        )
    }
   
   
    return (
            <div>
                
              { 
                  
              game.name  ?        
                  <div>
                    <div className ={styles.tit}> 
                        <h1 >{game.name}</h1>

                        <div className ={styles.contback}>
                            <Link to= "/home">
                            <button className ={styles.btnhome}>Home</button>
                            </Link>
                        </div>
                        
                    </div>
                    <div className = {styles.contpyg}>
                    <div className ={styles.contplat}>
                        <h2>Platforms: </h2>
                         {  typeof game.platforms !== "string" ?
                                game.platforms.map((plat) => {      
                                return <p>{plat.platform.name}</p>       
                        })  : game.platforms.split(',').map( (plat) => {
                                return <p>{plat}</p>
                        })  
                        }
                        
                    </div>
                    <div className ={styles.contgenr}> 
                            <h2>Genres</h2>
                            {game.genres.map(g => <p>{g.name}</p>)}
                        </div>    
                    </div> 
                         
                        <div className ={styles.contimg}>
                            <img src={game.background_image} alt="imagen" className ={styles.image} /> 
                        </div>
                        <div className={styles.continfo}>

                            <p>{ readMore ? game.description.replace(/<\/?[^>]+(>|$)/g, "") : `${game.description.substring(0,300).replace(/<\/?[^>]+(>|$)/g, "")}`}
                                 <button onClick={() => {setReadMore(!readMore)}} className = {styles.btnmore} >
                                    {readMore ? 'Show less' : '...Read more'}
                                 </button>
                            </p>

                        </div> 
                        <div className ={styles.contextra}>
                            <h2>Released: {game.released}</h2>
                            <h2>Rating: {game.rating}</h2>
                        </div>  
                  </div>
                  : <div className ={styles.tit}>
                         <h2>There is no game with that ID</h2>
                         <div className ={styles.contback}>
                         <Link to= "/home">
                         <button className ={styles.btnhome}>Back</button>
                         </Link>
                        </div>
                    </div>
              }
            </div> 
    )
}