import React from 'react'

export default MoviesContainer = ({movie}) => {

    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
                
        <p>({movie.Year})</p>
        </div>
    )
}