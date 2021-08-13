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
                
                <label>Genre</label>
                <select name="genres" id="genres">
                    <option value="action">Action</option>
                    <option value="indie">Indie</option>
                    <option value="adventure">Adventure</option>
                    <option value="role">Role</option>
                    <option value="strategy">Strategy</option>
                    <option value="shooter">Shooter</option>
                    <option value="casual">Casual</option>
                    <option value="simulation">Simulation</option>
                    <option value="puzzle">Puzzle</option>
                    <option value="arcade">Arcade</option>
                    <option value="platformer">Platformer</option>
                    <option value="racing">Racing</option>
                    <option value="sports">Sports</option>
                    <option value="fighting">Fighting</option>
                    <option value="family">Family</option>
                    <option value="board-games">Board-Games</option>
                    <option value="educational">Educational</option>
                    <option value="card">Card</option>
                </select>

                
                <button>Games made by you</button>
            </div>
        </div>
    )
}