import axios from "axios";

import {
  GET_MOVIES,
  GET_SERIES
} from "./types";


export const getSeries =  showName => dispatch => {
  fetch(`http://www.omdbapi.com/?s=${showName}&apikey=3b71935e&type=series`)
    .then(resp => resp.json())
    .then(response => {
      console.log(response)
      dispatch( {
        type: GET_SERIES,
        payload: response
      })})
  .catch(err => {
    dispatch( {
      type: GET_SERIES,
      payload: []
    })
  })
    
};

export const getMovies =  showName => dispatch => {
  fetch(`http://www.omdbapi.com/?s=${showName}&apikey=3b71935e&type=movie`)
    .then(resp => resp.json())
    .then(response => {
      console.log(response)
      dispatch( {
        type: GET_MOVIES,
        payload: response
      })})
  .catch(err => {
    dispatch( {
      type: GET_MOVIES,
      payload: []
    })
  })
    
};


