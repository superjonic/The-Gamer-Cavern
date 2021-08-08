import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogame } from '../actions';
import './search.css'

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
        <div className ="cont">
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={input} className= "search" placeholder ="Search a game..."/>
            <input type ="submit" value= "Search" className= "btnsearch"/>
            </form>

        </div>
    )
}