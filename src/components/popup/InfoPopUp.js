import React from 'react';
import Rating from '@material-ui/lab/Rating';
import './popup.css'



const InfoPopUp = ({movie}) => {
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
                        defaultValue={movie.imdbRating / 2} 
                        precision={0.5}
                        getLabelText={()=> '#ffd600'} 
                        color='#ffd600'
                        readOnly 
                        />
                    </div>
                        
                </div>
                <div className='genre'>
                    <h2>Genre</h2>
                    <p>{
                        movie.Genre.split(',').map(gen => <span>{gen}</span>)
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
                        movie.Language.split(',').map(lang => <span>{lang}</span>)
                    }</p>
                </div>
            </div>
            <div>
                <button className='btn'>More Info</button>
            </div>
            </div>
            
        </div>
    )
}

export default InfoPopUp;