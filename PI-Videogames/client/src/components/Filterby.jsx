import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByGenre, getVideogames, madeByYou } from '../actions';
import './filterby.css';


export default function FilterBy() {
    
    // const [genre, setGenre] = useState()
    const dispatch = useDispatch()

    //filtrar por genre
    //filtrar por videogame existente o creado por nosotros
    //puedo conectarme al store de redux, y aca filtrar los videogames
    
    


    // const handleSelect = (e) => {       //Conecte el option al state local, con ese numero de genre tengo que ordenar los vg, un filter donde los juegos tengan ese numero de genre
    //     setGenre(e.target.value)
    //                                   // un filter en el reducer? una action que se llame filterByGenre
    // }

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