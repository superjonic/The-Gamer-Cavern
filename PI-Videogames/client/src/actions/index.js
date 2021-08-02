export const ADD_VIDEOGAME = "ADD_VIDEOGAME";

export const addVideogame = (payload) => {
    return {
        type: ADD_VIDEOGAME,
        payload
    }
}