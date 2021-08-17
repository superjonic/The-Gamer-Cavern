import React, { useState, useEffect } from 'react';
import Gamecard from './GameCard';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; //equivale a mapStateToProps
import './games.css';
import { getVideogames, getGenres } from '../actions/index';


export default function Games (){
const videogames = useSelector((state) => state.videogames);
 
const dispatch = useDispatch();

const [n1, setN1] = useState(0);
const [n2, setN2] = useState(9);
const [isLoading, setIsLoading] = useState(true)

  


  useEffect(() => {
    dispatch(getVideogames())
    dispatch(getGenres())
  },[])

 



console.log(videogames)  
console.log(isLoading)      


const nextPage = () => {            //if llego al final vuelvo a comenzar la cuenta = if(n1 > videgames.length) n1 = 0
  if(n1 < videogames.length){
    setN1(n1 + 10)                  
    setN2(n2 + 10)
  } else if(n1 > videogames.length || n2 > videogames.length) {
      setN1(0)
      setN2(9)
  }
}

const prevPage = () => {
    setN1(n1 - 10)
    setN2(n2 - 10)
}



                                    
    return (
        <>
        <div className = "cards">
    
                {
                    videogames.map((g) => {
                        return (
                        <Link to ={`/gamedetail/${g.id}`} className = "link">
                            <Gamecard name={g.name} image={g.image} rating={g.rating} id={g.id} genres={g.genres} key={g.id}/>
                        </Link>
                        )
                    }).slice(n1, n2)      
                }
           
            
        </div>
        <div className ="pagingcont">
                <button className ="pagbtn" onClick ={prevPage} > &lt; </button>
                <button className ="pagbtn" onClick ={nextPage}> &gt; </button>
        </div>
        </>
    )
}