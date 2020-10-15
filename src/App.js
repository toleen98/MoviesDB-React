import React from 'react';
import Navbar from './layouts/Navbar';
import Slider from './components/Slider/Slider'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
   
    <div className="App">
       <Router>
        <Navbar/>
        <Slider/>
       </Router>
      
    </div>
  );
}

export default App;
