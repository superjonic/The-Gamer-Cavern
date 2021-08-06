import { ADD_VIDEOGAME, GET_VIDEOGAMES, SEARCH_VIDEOGAME  } from "../actions";


const initialState = {
  videogames: [],       
  createdGames: []
};

function rootReducer (state = initialState, action) {     //Mati hace el order y filter en redux
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
        
      case SEARCH_VIDEOGAME:
          return {
            ...state,
            videogames: action.payload
          }      
        
        default:
        return state;
    }
  }
  
  export default rootReducer;