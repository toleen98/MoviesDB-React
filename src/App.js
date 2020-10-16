import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Navbar from './layouts/Navbar';
import LandingPage from './pages/landingpage/LandingPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
   
    <div className="App">
      <Provider store={store}>
      <Router>
        <Navbar/>
        <LandingPage/>
       </Router>
      </Provider>
       
      
    </div>
  );
}

export default App;
