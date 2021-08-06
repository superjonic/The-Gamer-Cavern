import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogame } from '../actions';

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
        <div>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={input} />
            <input type ="submit" value= "Search"/>
            </form>

        </div>
    )
}