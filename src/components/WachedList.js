import React from 'react'

const WachedList = ({watched,onDeleteWatched}) => {
  return (
    <div>
       <ul className="list">
                {watched.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.poster} alt={`${movie.title} poster`} />
                    <h3>{movie.title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                      <button onClick={()=>onDeleteWatched(movie.imdbID)} className='btn-delete'>X</button>
                    </div>
                  </li>
                ))}
              </ul>
    </div>
  )
}

export default WachedList
