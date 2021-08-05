// import axios from 'axios';
import axios from 'axios';
export const ADD_VIDEOGAME = "ADD_VIDEOGAME";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";


export function addVideogame (payload) {
    return {
        type: ADD_VIDEOGAME,
        payload
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

//ordenamiento puede ir aca