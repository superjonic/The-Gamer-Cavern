import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByGenre, getVideogames, madeByYou } from '../actions';
import './filterby.css';


export default function FilterBy() {
    
    const dispatch = useDispatch()

   
    const handleRefresh = () => {
        dispatch(getVideogames())
    }
    const handleMadeByYou = () => {
        dispatch(madeByYou())
    }


    return (
        <div>                   
            <h4>Filter By</h4>
            <div className="filtzone">
                
        
                <select name="" id="" className ="selectgenre" onChange= {(e) => dispatch(filterByGenre(e.target.value)) }>
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

                
                <button onClick ={handleMadeByYou} className ="btnvgcreat">Made by you</button>

                <button onClick = {handleRefresh} className ="btnvgcreat">All</button>
            </div>
        </div>
    )
}