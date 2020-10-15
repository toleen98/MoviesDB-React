import React, { Component } from 'react';
import './Shows.css';

class ShowCard extends Component {

    render() {
        return(
            <div className='cont'>
                <img src={this.props.show.picture} alt={this.props.show.address}/>
                <h3>{this.props.show.address}</h3>
            </div>
           
        )
    }
}

export default ShowCard