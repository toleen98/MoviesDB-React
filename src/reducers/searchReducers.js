import {
    GET_SHOWS,
    HISTORY
  } from "../actions/types";
  
  const initialState = {
    shows: {
      movies:'',
      series:''
    }
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_SHOWS:
        return {
          ...state,
          shows: action.payload,
        };
      default:
        return state;
    }
}