import React from 'react';
import Rating from '@material-ui/lab/Rating';
import './popup.css'
import { Link } from "react-router-dom";

const InfoPopUp = ({movie}) =>{
        
    return (
        <div className='popup' style={{backgroundImage: `url(${movie.Poster})`}}>
            <div className='contant'>
            <div className='row1'>
                <h1>{movie.Title}</h1>
                <p>{movie.Plot}</p>
            </div>
            <div className='row2'>
                <div>
                    <h2>Rating</h2>
                    <div>
                        <Rating 
                        name="half-rating-read" 
                        defaultValue={movie.imdbRating && movie.imdbRating / 2 } 
                        precision={0.5}
                        color='#ffd600'
                        readOnly 
                        />
                    </div>
                        
                </div>
                <div className='genre'>
                    <h2>Genre</h2>
                    <p>{
                        movie.Genre && movie.Genre.split(',').map(gen => <span>{gen}</span>)
                    }</p>
                </div>
                <div>
                    <h2>Released</h2>
                    <p>{movie.Released}</p>
                </div>
                <div>
                    <h2>Directors</h2>
                    <p>{movie.Director}</p>
                </div>
                <div className='lang'>
                    <h2>Language</h2>
                    <p>
                    {
                        movie.Language && movie.Language.split(',').map(lang => <span>{lang}</span>)
                    }</p>
                </div>
            </div>
            <div>
                <button className='btn' >
                <Link 
                to={{pathname: '/moreinfo',
                state:movie}} >More Info</Link></button>
            </div>
            </div>
            
        </div>
    )
}



  export default InfoPopUp;

