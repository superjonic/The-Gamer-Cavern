import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByNameAsc, orderByNameDesc, orderByRatingAsc, orderByRatingDesc } from '../../actions';
import styles from './orderby.module.css';

export default function OrderBy () {
    const dispatch = useDispatch();


    const orderAsc = () =>{
        dispatch(orderByNameAsc())
    }
    const orderDesc = () => {
        dispatch(orderByNameDesc())
    }
    const orderRatingAsc = () => {
        dispatch(orderByRatingAsc())
    }
    const orderRatingDesc = () => {
        dispatch(orderByRatingDesc())
    }    

    return (
        <div>
            <h4>Order By</h4>
            <div className ={styles.orderzone}>
                <button onClick = {orderAsc} className = {styles.btnorder}>A - Z</button>
                <button onClick= {orderDesc} className = {styles.btnorder} >Z - A</button>
                <button onClick = {orderRatingAsc} className = {styles.btnorder}>Best Rating</button>
                <button onClick = {orderRatingDesc} className = {styles.btnorder}>Less Rating</button>
            </div>
        </div>
    )
}