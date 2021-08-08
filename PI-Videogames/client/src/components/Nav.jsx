import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import Search from './Search';
import FilterZone from './FilterZone';

export default function Nav(){
    return (
        <header className = " header">
            <div className="titlee">
                <h1>The Gamer Cavern</h1>
            </div>
            <div className ="searchcont">             
                <Search />
            </div> 
               
            <div className ="filtercont">    
                <Link to = '/createvideogame'>  
                <button className = "btncreate">Create Videogame</button>
                </Link>  
            </div>
            <div>
                <FilterZone />   
            </div>

        </header>
    )

}