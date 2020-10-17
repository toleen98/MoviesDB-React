import React, {Component} from 'react';
import {Col} from 'react-bootstrap'
import './movieInfo.css';


class MoreInfo extends Component {
    state = {
        info:{}
    }
    
    componentWillMount() {
        console.log(this.props.location.state)
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.props.location.state.Title}&api-key=VC0DNyoZMAEUep69bGHZGWz8ub9nNVhY 
        `)
        .then(resp => resp.json())
        .then(response => {
            console.log(response)
            this.setState({info:response.results[0]})
        })
    }

    render() {
        
        return(
            <div>
                <div className='info-row'>
                <div className='col1-info'><img src={this.props.location.state.Poster} alt={this.props.location.state.Title}/></div>
                <div className='col2-info'>
                    <div>{this.props.location.state.Title} <span>({this.props.location.state.Released})</span></div>
                    <div><span>Languge:</span> {this.props.location.state.Language}</div>
                    <div><span>Mpaa rating:</span> {this.state.info.mpaa_rating}</div>
                    <div><span>Genre:</span>Genre: {this.props.location.state.Genre}</div>
                    <div><span>Rate:</span> {this.props.location.state.imdbRating} . {this.props.location.state.imdbVotes} vote </div>
                    <div><span>Runtime:</span> {this.props.location.state.Runtime}</div>
                    <div><span>Director:</span> {this.props.location.state.Director}</div>
                    <div><span>Actors:</span> {this.props.location.state.Actors}</div>

                </div>
                </div>
                
                <div className='summary'>
                    <h2>Summary</h2>
                    <p>{this.state.info.summary_short}</p>
                    <p>{this.state.info.link && <a href={this.state.info.link.url}>{this.state.info.link.suggested_link_text}</a> }</p>
                </div>

            </div>
        )
    }

}

export default MoreInfo;