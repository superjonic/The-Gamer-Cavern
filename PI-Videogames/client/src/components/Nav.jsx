import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return (
        <header>
            <h1>Este es el Nav</h1>
            
            
            <div>
            <Link to = '/createVideogame'>  
            <button>Create Videogame</button>
            </Link>  
            </div>

        </header>
    )

}