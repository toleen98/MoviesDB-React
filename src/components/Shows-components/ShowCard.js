import React, { Component } from 'react';
import InfoPopUp from '../popup/InfoPopUp';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clikedShow } from "../../actions/searchAction";
import './Shows.css';

 
class ShowCard extends Component {
    state ={
        showInfoPopUp : false,
        showData: {}
    }
    componentWillMount() {
        fetch(`https://www.omdbapi.com/?apikey=3b71935e&i=${this.props.show.imdbID}`)
        .then(resp => resp.json())
        .then(response => {
        
        this.setState({showData: response})
        })

        if (this.props.shows.clikedShow === this.props.show.imdbID){
            this.setState({showInfoPopUp:true})
        }
        else {
            this.setState({showInfoPopUp:false})
        }
    }

    showInfo = (e) => {
       
        if (!this.state.showInfoPopUp) {
            this.props.clikedShow(this.props.show)
        }else {
            this.setState({showInfoPopUp:false})
        }   
    }
 
    
    
    
    render() {
        return(
            <div className='showCard' >
                
                <div className='cont' onClick={e => this.showInfo(e)} >
                    <img src={this.props.show.Poster} alt={this.props.show.Title} style={{border:this.state.showInfoPopUp? '3px solid #ffd600': 'none'}}/>
                    <h3>{this.props.show.Title}</h3>
                </div>
                
                
                {
                    this.state.showInfoPopUp  && <div>
                    <div className='arrow-up'></div>
                    <InfoPopUp movie={this.state.showData} />
                    </div>
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

