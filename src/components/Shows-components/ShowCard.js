import React, { Component } from 'react';
import InfoPopUp from '../popup/InfoPopUp';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clikedShow } from "../../actions/searchAction";
import './Shows.css';

const btnRef = React.createRef();
 
class ShowCard extends Component {
    state ={
        showInfoPopUp : false,
        showData: {}
    }
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=3b71935e&i=${this.props.show.imdbID}`)
    .then(resp => resp.json())
    .then(response => {
        
        this.setState({showData: response})
      })
    }
    showInfo = () => {
       const value = !this.state.showInfoPopUp ? true :false;
    
        this.setState({showInfoPopUp:value})
        // this.props.clikedShow(this.props.show)
     
    }
    
    
    
    render() {
        return(
            <div>
                
                <div className='cont' onClick={() => this.showInfo()}>
                    <img src={this.props.show.Poster} alt={this.props.show.Title}/>
                    <h3>{this.props.show.Title}</h3>
                </div>
                
                {
                   this.state.showInfoPopUp && <InfoPopUp movie={this.state.showData} />
                }
            </div>
            
           
        )
    }
}

ShowCard.propTypes = {
    shows: PropTypes.object.isRequired,
    clikedShow: PropTypes.func.isRequired

    
  };
  const mapStateToProps = state => ({
    shows: state.shows,
    
  });
  export default connect(
    mapStateToProps,
    {clikedShow}
  )(ShowCard);

