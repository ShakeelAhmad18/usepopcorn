import React from 'react'
import { useState } from 'react'
const MovieList = ({movie,onSelected}) => {
  const [isOpen1,setIsOpen1]=useState(true)

  return (
    
         <main className="main">
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <ul className="list list-movies">
          {movie?.map((movie) => (
            <li key={movie.imdbID} onClick={()=>onSelected(movie.imdbID)}>
              <img src={movie.Poster} alt={`${movie.Title} poster`} /> 
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>🗓</span>
                  <span>{movie.Year}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
   </main>
  )
}

export default MovieList
