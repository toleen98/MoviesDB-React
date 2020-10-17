import {
  GET_MOVIES,
  GET_SERIES,
  CLICKED_SHOW
} from "./types";


export const getSeries =  showName => dispatch => {
  fetch(`https://www.omdbapi.com/?s=${showName}&apikey=3b71935e&type=series`)
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
  fetch(`https://www.omdbapi.com/?s=${showName}&apikey=3b71935e&type=movie`)
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

export const clikedShow = show => dispatch => {
  dispatch({
    type: CLICKED_SHOW,
    payload: show.imdbID,
    show:show
  })
}
