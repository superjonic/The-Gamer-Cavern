import { 
  GET_VIDEOGAMES, 
  SEARCH_VIDEOGAME, 
  ORDER_BYNAME_ASC, 
  ORDER_BYNAME_DESC,
  ORDER_BYRATING_ASC, 
  ORDER_BYRATING_DESC, 
  FILTER_BYGENRE, 
  MADE_BYYOU,
  ORDER_BY_DATE  } from "../actions";


const initialState = {
  videogames: []
};

function rootReducer (state = initialState, action) {     
    switch(action.type) {
      // Aca va tu codigo;  
     
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
      case ORDER_BYRATING_ASC:
        return {
          ...state,
          videogames: [...state.videogames].sort((prev, next) => {
            return next.rating - prev.rating
          })
        }
      case ORDER_BYRATING_DESC:
        return {
          ...state,
          videogames: [...state.videogames].sort((prev, next) => prev.rating - next.rating)
       
        }    
      case FILTER_BYGENRE:
        return {
          ...state,
          videogames: state.videogames.filter((game) => {
             return game.genres.find((genre) =>{ 
               return genre.name.toLowerCase() === action.payload
              })
          })
        }
      case MADE_BYYOU:
        return {
          ...state,
          videogames: state.videogames.filter((game) => {
            return game.id.length > 10
          })
        }
        case ORDER_BY_DATE:
          return {
            ...state,
            videogames: [...state.videogames].sort((prev, next) => {
              return prev.released - next.released
            })
          }    
        
        default:
        return state;
    }
  }
  
  export default rootReducer;