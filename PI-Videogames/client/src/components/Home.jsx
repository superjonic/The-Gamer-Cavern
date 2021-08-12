import React from 'react';
import Nav from './Nav';
import Games from './Games';
import './home.css';


export default function Home () {

    
    //tengo que hacer la logica del paginado en home, las funciones y dps pasarlas como prop a games, games esta subscripto a redux store
    //le paso las funciones como prop a Games, pasa que el click ocurre en el comp padre
    //meto el paginado abajo dentro de Games, mando los batones abajo de todo y Home queda contenedor nomas

    return (
        <div>
            <Nav />
            
            <Games />

        </div>

    )
}