import React, {Component, } from 'react';
import Slider from '../../components/Slider/Slider';
import Tabs from '../../components/Tabs/Tabs';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Shows from '../../components/Shows-components/Shows';
import MoreInfo from '../movieInfoPage/MovieInfo';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class LandingPage extends Component {

    
    render() {
        const {movies, series, history} = this.props.shows
        return(
            <div>
                <Slider history={history} />
                <Router>
                    <Tabs/> 
                    
                    <Switch>
                        <Route path='/' exact component={() => <Shows shows={movies}/>}></Route>
                        <Route path='/series' exact component={() => <Shows shows={series}/>}></Route>
                        <Route path='/moreInfo'  component={MoreInfo}></Route>
                        
                    </Switch>
                </Router>
                
              
            </div>
        )
    }

}

LandingPage.propTypes = {
  shows: PropTypes.object.isRequired,

    
};

const mapStateToProps = state => ({
  shows: state.shows,
});

export default connect(
    mapStateToProps
)(LandingPage);
