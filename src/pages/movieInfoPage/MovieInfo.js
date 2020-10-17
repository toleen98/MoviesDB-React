import React, {Component} from 'react';



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
                <div><img src={this.props.location.state.Poster} alt={this.props.location.state.Title}/></div>
                <div>
                    <div>{this.props.location.state.Title} ({this.props.location.state.Released})</div>
                    <div>Languge: {this.props.location.state.Language}</div>
                    <div>Languge: {this.props.location.state.Language}</div>
                    <div>Mpaa rating: {this.state.info.mpaa_rating}</div>
                    <div>Genre: {this.props.location.state.Genre}</div>
                    <div>Rate: {this.props.location.state.imdbRating} . {this.props.location.state.imdbVotes} vote </div>
                    <div>Runtime: {this.props.location.state.Runtime}</div>
                    <div>Director: {this.props.location.state.Director}</div>
                    <div>Actors: {this.props.location.state.Actors}</div>

                </div>
                <div>
                    <h2>Summry</h2>
                    <p>{this.state.info.summary_short}</p>
                    {/* <p>{this.state.info.link.suggested_link_text} <span>{this.state.info.link.url}</span></p> */}
                </div>

            </div>
        )
    }

}

export default MoreInfo;