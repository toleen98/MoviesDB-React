import {
    GET_SERIES,
    GET_MOVIES,
    CLICKED_SHOW
  } from "../actions/types";
  
  const initialState = {
    
      movies:[],
      series:[],
      clikedShow:'',
      history:[]
    
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
          case CLICKED_SHOW:
            return {
              ...state,
              clikedShow: action.payload,
              history: [...state.history, action.show]
            };
      default:
        return state;
    }
}