import React, { useState, useEffect } from 'react';
import Gamecard from '../GameCard/GameCard';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import styles from './games.module.css';
import { getVideogames } from '../../actions/index';


export default function Games (){
const videogames = useSelector((state) => state.videogames);
 
const dispatch = useDispatch();

const [n1, setN1] = useState(0);
const [n2, setN2] = useState(9);

const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    dispatch(getVideogames());
  },[]);

 
console.log(videogames);  
console.log(isLoading);    


const nextPage = () => {            
  if(n1 < videogames.length){
    setN1(n1 + 10);                  
    setN2(n2 + 10);
  } else if(n1 > videogames.length || n2 > videogames.length) {
      setN1(0);
      setN2(9);
  }
}

const prevPage = () => {
    setN1(n1 - 10);
    setN2(n2 - 10);
}
                                    
    return (
        <>
        <div className = {styles.cards}>
    
                {
                    videogames.map((g) => {
                        return (
                        <Link to ={`/gamedetail/${g.id}`} className = {styles.link}>
                            <Gamecard name={g.name} image={g.image} rating={g.rating} id={g.id} genres={g.genres} key={g.id}/>
                        </Link>
                        )
                    }).slice(n1, n2)      
                }
           
            
        </div>
        <div className ={styles.pagingcont}>
                <button className ={styles.pagbtn} onClick ={prevPage} > &lt; </button>
                <button className = {styles.pagbtn} onClick ={nextPage}> &gt; </button>
        </div>
        </>
    )
}