import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css';
import Search from '../Search/Search';
import FilterZone from '../FilterZone/FilterZone';

export default function Nav(){
    return (
        <header className = {styles.header}>
            <div className={styles.titlee}>
                <h1>The Gamer Cavern</h1>
            </div>
            <div className ={styles.searchcont}>             
                <Search />
            </div> 
               
            <div className ={styles.filtercont}>    
                <Link to = '/createvideogame'>  
                <button className = {styles.btncreate}>Create Videogame</button>
                </Link>  
            </div>
            <div>
                <FilterZone />   
            </div>

        </header>
    )

}