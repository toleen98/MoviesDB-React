import React from 'react';
import Navbar from './layouts/Navbar';
import Slider from './components/Slider/Slider'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from './components/Shows-components/Movies';
import Tabs from './components/Tabs/Tabs';
import InfoPopUp from './components/popup/InfoPopUp'

const movie = {
  "Title": "Dora",
  "Year": "2017",
  "Rated": "N/A",
  "Released": "31 Mar 2017",
  "Runtime": "139 min",
  "Genre": "Action, Horror, Thriller",
  "Director": "Dass Ramasamy",
  "Writer": "Dass Ramasamy",
  "Actors": "Nayanthara, Harish Uthaman, Thambi Ramayya, Shan",
  "Plot": "A father and a daughter purchase a used car which is possessed by an unknown dangerous spirit craving for revenge.",
  "Language": "Tamil, Telugu, Hindi",
  "Country": "India",
  "Awards": "N/A",
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2ViYTE1NjMtMGJjZC00NzJlLWE0MjMtNTRhZWQ0MWM3MGIwXkEyXkFqcGdeQXVyODk4ODEyMjk@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "5.3/10"
      }
  ],
  "Metascore": "N/A",
  "imdbRating": "5.3",
  "imdbVotes": "597",
  "imdbID": "tt6080914",
  "Type": "movie",
  "DVD": "N/A",
  "BoxOffice": "N/A",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}
function App() {
  return (
   
    <div className="App">
       <Router>
        <Navbar/>
        <Slider/>
        <Tabs/>
        <Movies/>
        <InfoPopUp movie={movie}/>
       </Router>
      
    </div>
  );
}

export default App;
