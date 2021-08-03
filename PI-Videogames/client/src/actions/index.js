import axios from 'axios';
export const ADD_VIDEOGAME = "ADD_VIDEOGAME";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

export const addVideogame = (payload) => {
    return {
        type: ADD_VIDEOGAME,
        payload
    }
}

export const getVideogames = () => {
    return function (dispatch) {
       return axios.get('localhost:3001/videogames')
       .then((games) => {
           dispatch({
               type: GET_VIDEOGAMES,
               payload: games.data.results
           })
       })
    }
}