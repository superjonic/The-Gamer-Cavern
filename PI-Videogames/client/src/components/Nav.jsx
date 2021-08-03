import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav(){
    return (
        <header className = " header">
            <h1>The Gamer Cavern</h1>
            
            
            <div>
            <Link to = '/createVideogame'>  
            <button className = " btn">Create Videogame</button>
            </Link>  
            </div>

        </header>
    )

}