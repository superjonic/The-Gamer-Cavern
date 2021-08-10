import React from 'react';
import Nav from './Nav';
import Games from './Games';
import './home.css';

export default function Home () {
    return (
        <div>
            <Nav />
            <div className ="pagingcont">
                <button className ="paging">next</button>
                <button className ="paging"> previous</button>
            </div>
            <Games />

        </div>

    )
}