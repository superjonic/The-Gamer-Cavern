import React from 'react';
import { Link } from 'react-router-dom'
import './welcome.css';


export default function Welcome(){
    return (
         <div className = "backwelcome">
            <div className = "circle"> 
                <h1>The Gamer Cavern</h1>
                <h4>Welcome</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet aut neque dolores, error optio vero eos similique esse inventore.</p>
                <Link to="/home">
                <button className= "btn1">Enter</button>
                </Link>
            </div>
            <div className = "flash">

            </div>
        </div>
        

    )

}