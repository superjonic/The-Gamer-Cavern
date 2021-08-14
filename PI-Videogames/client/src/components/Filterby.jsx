import React from 'react';
import { useSelector } from 'react-redux';
import './filterby.css';

export default function FilterBy() {
    const videogames = useSelector((state) => state.videogames)
    //filtrar por genre
    //filtrar por videogame existente o creado por nosotros
    //puedo conectarme al store de redux, y aca filtrar los videogames
    return (
        <div>                   
            <h4>Filter By</h4>
            <div className="filtzone">
                
        
                <select name="genres" id="genres" className ="selectgenre">
                            <option value= "">-- Genres --</option>
                            <option value= "1">Action</option> 
                            <option value="2">Indie</option>
                            <option value="3">Adventure</option>
                            <option value="4">Role</option>
                            <option value="5">Strategy</option>
                            <option value="6">Shooter</option>
                            <option value="7">Casual</option>
                            <option value="8">Simulation</option>
                            <option value="9">Puzzle</option>
                            <option value="10">Arcade</option>
                            <option value="11">Platformer</option>
                            <option value="12">Racing</option>
                            <option value="13">Multiplayer</option>
                            <option value="14">Sports</option>
                            <option value="15">Fighting</option>
                            <option value="16">Family</option>
                            <option value="17">Board-games</option>
                            <option value="18">Educational</option>
                            <option value="19">Card</option>
                </select>

                
                <button className ="btnvgcreat">Made by you</button>
            </div>
        </div>
    )
}