import { ADD_VIDEOGAME, GET_VIDEOGAMES, SEARCH_VIDEOGAME, ORDER_BYNAME_ASC, ORDER_BYNAME_DESC, FILTER_BYGENRE  } from "../actions";


const initialState = {
  videogames: []
};

function rootReducer (state = initialState, action) {     //Mati hace el order y filter en redux
    switch(action.type) {
      // Aca va tu codigo;  
      case ADD_VIDEOGAME:
        return {
          ...state,
          videogames: [...state.videogames, action.payload]
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
       
      case ORDER_BYNAME_ASC:
        return {
          ...state,
          videogames: state.videogames.sort((a, b) => a.name.localeCompare(b.name))
        }
      case ORDER_BYNAME_DESC:
        return {
          ...state,
          videogames: state.videogames.sort((a, b) => b.name.localeCompare(a.name))
        }
      case FILTER_BYGENRE:
        return {
          ...state,
          videogames: state.videogames.genres.filter((genre) => {
            return state.videogames.genre.id === action.payload
          })
        }  
        
        default:
        return state;
    }
  }
  
  export default rootReducer;