import React from 'react';
import Nav from './Nav';
import Games from './Games';
import './home.css';

export default function Home () {
    return (
        <div>
            <Nav />
            <h1>Estoy en el Home </h1>
            <Games />

        </div>

    )
}