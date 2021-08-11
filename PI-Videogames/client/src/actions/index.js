// import axios from 'axios';
import axios from 'axios';
export const ADD_VIDEOGAME = "ADD_VIDEOGAME";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const SEARCH_VIDEOGAME = "SEARCH_VIDEOGAME";
export const ORDER_BYNAME_ASC = "ORDER_BYNAME_ASC";
export const ORDER_BYNAME_DESC = "ORDER_BYNAME_DESC";

const URL = 'https://api.rawg.io/api/';

export function addVideogame (payload) {
    return function (dispatch){
        return axios.post('http://localhost:3001/videogame')
        .then((game) => {
            dispatch({
                type: ADD_VIDEOGAME,
                payload: game
            })
        })
    }
}

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
       return axios.get(`http://localhost:3001/videogames?name=${name}`) // consulto al servidor 
        //   return axios.get(`${URL}games?search=${name}&key=83ee0108f52c4c0cb24a962648dc5ee9`) 
       .then((games) => {
           dispatch({
               type: SEARCH_VIDEOGAME,
               payload: games.data
           })
       })
    }
}

//ordenamiento puede ir aca
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