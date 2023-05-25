import React from "react";

// Make component for each movie which might be in movie array list and added "if" statement for images

const MovieCard = ({movie}) => {
    return (
      <div className='movie'>
        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          <p><img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt='Poster'/></p>
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
    </div>
    )
}

export default MovieCard;