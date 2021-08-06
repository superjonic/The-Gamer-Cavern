import React from 'react';
import FilterBy from './Filterby';
import OrderBy from './OrderBy';
import { useState } from 'react';

export default function FilterZone(){
    const [toggle, setToggle] = useState()
    return (

        <div>
            <button>Filter Zone</button>
            <FilterBy />
            <OrderBy />

        </div>
    )
}