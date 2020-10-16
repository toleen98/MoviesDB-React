import axios from "axios";

import {
  GET_SHOWS,
  HISTORY
} from "./types";

// Register User

// Login - get user token
export const getShow = async showName =>  {
  const shows = {
    movies :'',
    series:''
  }
  await axios
    .post(" https://sm-fylasof.herokuapp.com/api/users/login", {apikey:'3b71935e', s: showName, type:'series'})
    .then(res => {
      shows.series = res.data
    })
    .catch(err =>
      shows.series = ''

    );

   await axios
    .post(" https://sm-fylasof.herokuapp.com/api/users/login", {apikey:'3b71935e', s: showName, type:'movie'})
    .then(res => {
      shows.movies = res.data
    })
    .catch(err =>
      shows.movies = ''

    );

    return {
      type: GET_SHOWS,
      payload: shows
    }
};

