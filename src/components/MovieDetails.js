import React, { useEffect, useState } from 'react'
import StarRating from './StarRating'
import Loader from './Loader';

const MovieDetails = ({ selectedID, onCloseMovie }) => {
  const [movie, setMovie] = useState({})
  const [isLoading,setLoading]=useState(false);
  const { Title: tilte,Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre } = movie;


  useEffect(function () {
    async function DetailSelectedMovie() {
      setLoading(true)
      const res = await fetch(`http://www.omdbapi.com/?apikey=a97ded1a&i=${selectedID}`)
      const data = await res.json()

      setMovie(data)
      setLoading(false)
    }

    DetailSelectedMovie();
  }, [selectedID])

  return (
    <div className='details'>
      { isLoading ? <Loader/> :
      <>
      <header>
        <button className='btn-back' onClick={onCloseMovie}>&larr;</button>
       <img src={poster} alt={`poster of ${movie} Movie`} />
        <div className="details-overview">
          <h2>{tilte}</h2>
          <p>{released} &bull; {runtime}</p>
          <p>{genre}</p>
          <p><span>🌟</span>{imdbRating} IMdb Rating</p>
        </div>
      </header>
      <section>
        <div className="rating">
          <StarRating maxRating={10} size={20} />
        </div>
        <p><em>{plot}</em></p>
        <p>Starring {actors}</p>
        <p>Directed By {director}</p>
      </section>
      </>
}
      
    </div>
  )
}

export default MovieDetails
