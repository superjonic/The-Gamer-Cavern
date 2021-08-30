// import axios from 'axios';
import axios from 'axios';
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const SEARCH_VIDEOGAME = "SEARCH_VIDEOGAME";
export const ORDER_BYNAME_ASC = "ORDER_BYNAME_ASC";
export const ORDER_BYNAME_DESC = "ORDER_BYNAME_DESC";
export const ORDER_BYRATING_ASC = "ORDER_BYRATING_ASC";
export const ORDER_BYRATING_DESC = "ORDER_BYRATING_DESC";
export const FILTER_BYGENRE = "FILTER_BYGENRE";
export const MADE_BYYOU = "MADE_BYYOU";
export const ORDER_BY_DATE = "ORDER_BY_DATE";



export function getVideogames() {
    return function (dispatch) {
       return axios.get('http://localhost:3001/videogames') // consulto al servidor 
       .then((games) => {
           dispatch({
               type: GET_VIDEOGAMES,
               payload: games.data
           })
       })
    }
}

export function searchVideogame(name) {
    return function (dispatch) {
       return axios.get(`http://localhost:3001/videogames?name=${name}`)
       .then((games) => {
           dispatch({
               type: SEARCH_VIDEOGAME,
               payload: games.data
           })
       })
    }
}

//ordenamiento
export function orderByNameAsc(){
    return {
        type: ORDER_BYNAME_ASC
    }
}
export function orderByNameDesc(){
    return {
        type: ORDER_BYNAME_DESC
    }
}

export function orderByRatingAsc(){
    return {
        type: ORDER_BYRATING_ASC
    }
}
export function orderByRatingDesc(){
    return {
        type: ORDER_BYRATING_DESC
    }
}

export function filterByGenre(genre){
    return {
        type: FILTER_BYGENRE,
        payload: genre
    }
}
export function madeByYou(){
    return {
        type: MADE_BYYOU
    }
}

export function orderByDate(){
    return {
        type: ORDER_BY_DATE
    }
}