import React, { useImperativeHandle } from 'react';
import FilterBy from './Filterby';
import OrderBy from './OrderBy';
import { useState } from 'react';
import './filterzone.css';

export default function FilterZone(){
    const [toggle, setToggle] = useState(false);

    function handleClick(){
        setToggle(!toggle)
    }
    console.log(toggle)
    return (

        <div>
            <button onClick ={handleClick} className ="btnzone">Filter Zone</button>
            {
                toggle ?
                <div className = "zone"> 
                    <h3>Filter Zone</h3> 
                    <FilterBy />
                    <OrderBy />
                </div>
                : null
            }
           

        </div>
    )
}