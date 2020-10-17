import React, { Suspense, lazy } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Navbar from './layouts/Navbar';
// import LandingPage from './pages/landingpage/LandingPage';
import MoreInfo from './pages/movieInfoPage/MovieInfo'
import { BrowserRouter as Router, Route, Switch,useHistory  } from "react-router-dom";



const LandingPage = React.lazy(() => import('./pages/landingpage/LandingPage'));

function App() {
  let history = useHistory();
  return (
   
    <div className="App">
      <Provider store={store}>
      <Router  >
        <Navbar/>
        <Suspense fallback={<div>Loading...</div>}>
        
          <LandingPage/>
          
        
        </Suspense>
       </Router>
      </Provider>
       
      
    </div>
  );
}

export default App;
