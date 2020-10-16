import React, { Component } from 'react';
import InfoPopUp from '../popup/InfoPopUp';
import './Shows.css';

class ShowCard extends Component {
    state ={
        showInfoPopUp : false,
        showData: []
    }
    componentDidMount() {
        
    }

    showInfo = () => {

    }
    render() {
        return(
            <div>
                <div className='cont' onClick={this.showInfo}>
                    <img src={this.props.show.Poster} alt={this.props.show.Title}/>
                    <h3>{this.props.show.Title}</h3>
                </div>
                {
                    this.state.showInfoPopUp && <InfoPopUp movie={}/>
                }
            </div>
            
           
        )
    }
}

export default ShowCard