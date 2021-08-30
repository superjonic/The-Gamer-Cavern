import React from 'react';
import { Link } from 'react-router-dom'
import styles from './welcome.module.css';


export default function Welcome(){
    return (
         <div className = {styles.backwelcome}>
            <div className = {styles.circle}> 
                <h1>The Gamer Cavern</h1>
                <h4>Welcome</h4>
                <p>Press Enter to find out all the games you are looking for, the latest, the oldest, the best. We are gamers like you. </p>
                <Link to="/home">
                <button className= {styles.btn1}>Enter</button>
                </Link>
            </div>
            <div className = {styles.flash}>

            </div>
        </div>
        

    )

}