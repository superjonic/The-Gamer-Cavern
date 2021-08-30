import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogame } from '../../actions';
import styles from './search.module.css'

export default function Search(){
   const [input, setInput] = useState([]); 
   const dispatch = useDispatch(); 

   console.log(input)

   function handleSubmit(e){
    e.preventDefault();  
    dispatch(searchVideogame(input))
    setInput('')
}
    function handleChange(e){
        setInput(e.target.value);  
    }

    return (
        <div className ={styles.cont}>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={input} className= {styles.search} placeholder ="Search a game..."/>
            <input type ="submit" value= "Search" className= {styles.btnsearch}/>
            </form>

        </div>
    )
}