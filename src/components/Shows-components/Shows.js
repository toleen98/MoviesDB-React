import React, { Component } from 'react';
import ShowCard from './ShowCard';
import './Shows.css'


class Shows extends Component {
    componentWillUpdate(prevProps, prevState){
        console.log(this.props.shows.Search)

    }

    render() {
        const shows = this.props.shows.Search 
        return(
            <div className='flex-container'>
            { shows && shows.map( show => {
                return (<ShowCard show={show} key={show.imdbID}/>)
            })
                
                }
            </div>
        )
    }
}

export default Shows;