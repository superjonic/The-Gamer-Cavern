import React from 'react';
import FilterBy from '../FilterBy/Filterby';
import OrderBy from '../OrderBy/OrderBy.jsx';
import { useState } from 'react';
import styles from './filterzone.module.css';

export default function FilterZone(){
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle)
    }
    console.log(toggle)
    return (

        <div>
            <button onClick ={handleClick} className ={styles.btnzone}>Filter Zone</button>
            {
                toggle ?
                <div className = {styles.zone}> 
                    <FilterBy />
                    <OrderBy />
                </div>
                : null
            }
        </div>
    )
}