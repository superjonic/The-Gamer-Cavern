import React from 'react';
import { Link } from 'react-router-dom'
import './welcome.css';


export default function Welcome(){
    return (
         <div className = "backwelcome">
            <div className = "circle"> 
                <h1>The Gamer Cavern</h1>
                <p>Welcome</p>
                <Link to="/home">
                <button className= "btn1">Enter</button>
                </Link>
            </div>
        </div>
        

    )

}