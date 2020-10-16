import {
    GET_SERIES,
    GET_MOVIES,
    HISTORY
  } from "../actions/types";
  
  const initialState = {
    
      movies:[],
      series:[]
    
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_SERIES:
        return {
          ...state,
          series: action.payload,
        };
        case GET_MOVIES:
          return {
            ...state,
            movies: action.payload,
          };
      default:
        return state;
    }
}