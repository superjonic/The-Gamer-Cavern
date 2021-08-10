import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { orderByName } from '../actions';

export default function OrderBy () {
    //puedo conectar este componente al store global de redux y hacer el ordenamiento aca
    
    const dispatch = useDispatch();

    //tengo que afectar luego al store con un dispatch. como se entera games del filtrado? 

    //ordenar alfabeticamente, un sort.  ascendente y descendente
    //ordenar por rating ascedente y descendente
    function orderAsc(){
        dispatch(orderByName())
    }

    return (
        <div>
            <h4>Order By</h4>
            <button onClick = {orderAsc()}>A-Z</button>
            
        </div>
    )
}