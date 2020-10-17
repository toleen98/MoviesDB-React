import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Navbar from './layouts/Navbar';
import LandingPage from './pages/landingpage/LandingPage';
import MoreInfo from './pages/movieInfoPage/MovieInfo'
import { BrowserRouter as Router, Route, Switch,useHistory  } from "react-router-dom";




function App() {
  let history = useHistory();
  return (
   
    <div className="App">
      <Provider store={store}>
      <Router  >
        <Navbar/>
        
        <Switch>
          <Route path='/' exact component={LandingPage} history={history}></Route>
          <Route path='/moreInfo'  component={MoreInfo}></Route>
        </Switch>
       </Router>
      </Provider>
       
      
    </div>
  );
}

export default App;
