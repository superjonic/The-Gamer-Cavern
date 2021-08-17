import React from 'react';
import { Link } from 'react-router-dom'
import './welcome.css';


export default function Welcome(){
    return (
         <div className = "backwelcome">
            <div className = "circle"> 
                <h1>The Gamer Cavern</h1>
                <h4>Welcome</h4>
                <p>Press Enter to find out all the games you are looking for, the latest, the oldest, the best. We are gamers like you. </p>
                <Link to="/home">
                <button className= "btn1">Enter</button>
                </Link>
            </div>
            <div className = "flash">

            </div>
        </div>
        

    )

}