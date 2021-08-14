import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByNameAsc, orderByNameDesc } from '../actions';
import './orderby.css';

export default function OrderBy () {
  
    
    const dispatch = useDispatch();

    //tengo que afectar luego al store con un dispatch. como se entera games del filtrado? 

    //ordenar alfabeticamente, un sort.  ascendente y descendente
    //ordenar por rating ascedente y descendente
    const orderAsc = () =>{
        dispatch(orderByNameAsc())
    }
    const orderDesc = () => {
        dispatch(orderByNameDesc())
    }

    return (
        <div>
            <h4>Order By</h4>
            <div className ="orderzone">
                <button onClick = {orderAsc()} className = 'btnorder'>A - Z</button>
                <button onClick= {orderDesc()} className = 'btnorder' >Z - A</button>
                <button className = 'btnorder'>Best Rating</button>
                <button className = 'btnorder'>Less Rating</button>
            </div>
        </div>
    )
}