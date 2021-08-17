import { ADD_VIDEOGAME, GET_VIDEOGAMES, GET_GENRES, SEARCH_VIDEOGAME, ORDER_BYNAME_ASC, ORDER_BYNAME_DESC, FILTER_BYGENRE  } from "../actions";


const initialState = {
  videogames: [],
  genres: []
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
      case GET_GENRES:
        return {
          ...state,
          genres: action.payload
        }  
        
      case SEARCH_VIDEOGAME:
          return {
            ...state,
            videogames: action.payload
          }      
       
      case ORDER_BYNAME_ASC:
        return {
          ...state,
          videogames: [...state.videogames].sort((prev, next) => {
            if(prev.name > next.name) return 1
            if(prev.name < next.name) return -1
            return 0
          })
        }
      case ORDER_BYNAME_DESC:
        return {
          ...state,
          videogames: [...state.videogames].sort((prev, next) => {
            if(prev.name > next.name) return -1
            if(prev.name < next.name) return 1
            return 0
          })
        }
      case FILTER_BYGENRE:
        return {
          ...state,
          videogames: state.videogames.filter((game) => {
             return game.genres.find((genre) =>{ 
               return genre.slug === action.payload
              })
          })
        }  
        
        default:
        return state;
    }
  }
  
  export default rootReducer;