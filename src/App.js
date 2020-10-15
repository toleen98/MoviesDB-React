import React from 'react';
import Navbar from './layouts/Navbar';
import Slider from './components/Slider/Slider'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from './components/Shows-components/Movies'
import Tabs from './components/Tabs/Tabs'

function App() {
  return (
   
    <div className="App">
       <Router>
        <Navbar/>
        <Slider/>
        <Tabs/>
        <Movies/>
       </Router>
      
    </div>
  );
}

export default App;
