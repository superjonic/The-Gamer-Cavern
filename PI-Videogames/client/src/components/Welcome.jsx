import React from 'react';
import { Link } from 'react-router-dom'


export default function Welcome(){
    return (
        <body  className = 'welcome'>
         <div>
            <div> 
                <h1>The Gamer Cavern</h1>
                <p>Welcome</p>
                <Link to="/home">
                <button>Enter</button>
                </Link>
            </div>
        </div>
        </body>

    )

}