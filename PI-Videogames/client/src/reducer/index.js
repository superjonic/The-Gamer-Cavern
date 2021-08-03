import { ADD_VIDEOGAME, GET_VIDEOGAMES } from "../actions";

const initialState = {
  videogames: [],       
  createdGames: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      // Aca va tu codigo;  
      case ADD_VIDEOGAME:
        return {
          ...state,
          createdGames: [...state.createdGames, action.payload]
        }
      case GET_VIDEOGAMES:
        return {
          ...state,
          videogames: action.payload
        }  
        
        default:
        return state;
    }
  }
  
  export default rootReducer;