import React, { useState } from 'react';
import Gamecard from './GameCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; //equivale a mapStateToProps
import './games.css'

export default function Games (){
const videogames = useSelector((state) => state.videogames);  
  
const [n1, setN1] = useState(0);
const [n2, setN2] = useState(9);

console.log(n1)


// var n1 = Math.floor(Math.random()* 6);   // => el math random del primer renderizado hacerlo en la primera vez action? reducer?
// var n2 = n1 + 9;

// var nineResults = videogames.slice(n1, n2)

console.log(videogames)         //hacer algun tipo de funcion nextPage - prevPage  2 buttons < >


const nextPage = () => {
    setN1(n1 + 10)
    setN2(n2 + 10)
}

// funcion nextPage y funcion PreviousPage y pasarselas respectivamente a cada button
// la funcion deberia afectar al state de redux? no podria manejarlo con state local

//yo me traigo 9 con un slice, tengo que relacionarlo, esta conectado, que la funcion muestre los sgtes 9. 
// entonces los parametros n1 y n2 podrian ser state locales, el slice estaria escuchando a los states, y las funciones afectarian el state, y se re-renderizaria 

                                    //idea hacer el slice dentro del render,dps del .map
    return (
        <>
        <div className = "cards">
    
                {
                    videogames.map((g) => {
                        return (
                        <Link to ={`/gamedetail/${g.id}`} className = "link">
                            <Gamecard name={g.name} image={g.image} rating={g.rating} id={g.id} key={g.id}/>
                        </Link>
                        )
                    }).slice(n1, n2)      
                }
           
            
        </div>
        <div className ="pagingcont">
                <button className ="pagbtn" >previous</button>
                <button className ="pagbtn" onClick ={nextPage}> next</button>
        </div>
        </>
    )
}