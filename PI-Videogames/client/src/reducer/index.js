import { ADD_VIDEOGAME, GET_VIDEOGAMES } from "../actions";

const initialState = {
  createdGames: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      // Aca va tu codigo;  
      case ADD_VIDEOGAME:
        return {

        }
      case GET_VIDEOGAMES:
        return {
          
        }  
        
        default:
        return state;
    }
  }
  
  export default rootReducer;