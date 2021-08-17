import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByGenre } from '../actions';
import './filterby.css';

export default function FilterBy() {
    
    const [genre, setGenre] = useState()
    const dispatch = useDispatch()

    //filtrar por genre
    //filtrar por videogame existente o creado por nosotros
    //puedo conectarme al store de redux, y aca filtrar los videogames
    console.log(genre)


    const handleSelect = (e) => {       //Conecte el option al state local, con ese numero de genre tengo que ordenar los vg, un filter donde los juegos tengan ese numero de genre
        setGenre(e.target.value)
        dispatch(filterByGenre(genre))        // un filter en el reducer? una action que se llame filterByGenre
    }

    return (
        <div>                   
            <h4>Filter By</h4>
            <div className="filtzone">
                
        
                <select name="genres" id="genres" className ="selectgenre" onChange= {handleSelect}>
                            <option value= "">-- Genres --</option>
                            <option value= "action">Action</option> 
                            <option value="indie">Indie</option>
                            <option value="adventure">Adventure</option>
                            <option value="role-playing-games-rpg">Role</option>
                            <option value="strategy">Strategy</option>
                            <option value="shooter">Shooter</option>
                            <option value="casual">Casual</option>
                            <option value="simulation">Simulation</option>
                            <option value="puzzle">Puzzle</option>
                            <option value="arcade">Arcade</option>
                            <option value="platformer">Platformer</option>
                            <option value="racing">Racing</option>
                            <option value="massively-multiplayer">Multiplayer</option>
                            <option value="sports">Sports</option>
                            <option value="fighting">Fighting</option>
                            <option value="family">Family</option>
                            <option value="board-games">Board-games</option>
                            <option value="educational">Educational</option>
                            <option value="card">Card</option>
                </select>

                
                <button className ="btnvgcreat">Made by you</button>
            </div>
        </div>
    )
}