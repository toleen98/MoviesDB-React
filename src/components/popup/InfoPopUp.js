import React from 'react';


const InfoPopUp = ({movie}) => {
    return (
        <div>
            <div className='row1'>
                <h2>{movie.Title}</h2>
                <p>movie.Plot</p>
            </div>
            <div className='row2'>
                <div>
                    <h3>Rating</h3>
                        {movie.imdbRating}
                </div>
                <div>
                    <h3>Genre</h3>
                    <p>{movie.Genre}</p>
                </div>
                <div>
                    <h3>Released</h3>
                    <p>{movie.Released}</p>
                </div>
                <div>
                    <h3>Directors</h3>
                    <p>{movie.Director}</p>
                </div>
                <div>
                    <h3>Language</h3>
                    <p>{movie.Language}</p>
                </div>
            </div>
            <div>
                <button>More Info</button>
            </div>
        </div>
    )
}