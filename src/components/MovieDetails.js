import React, { useEffect, useState } from 'react'
import StarRating from './StarRating'
import Loader from './Loader';

const MovieDetails = ({ selectedID, onCloseMovie, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({})
  const [isLoading, setLoading] = useState(false);
  const [userRating, setUserRatimg] = useState(0)

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedID)

  const { Title: tilte, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre } = movie;

 const userWatchedRating=watched.find(movie=>movie.imdbID === selectedID)?.userRating;

  function handleAdd() {
    const NewWatchedMovie = {
      imdbID: selectedID,
      tilte,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
      userRating,
    }

    onAddWatched(NewWatchedMovie)
    onCloseMovie();
  }

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


  useEffect(function (){
    if(!tilte) return;
     document.title=`Movie | ${tilte} `
     
     return function(){
         document.title='usePopcorn'
     }
     
  },[tilte])


useEffect(function (){
  function callback(e){
    if(e.code === 'Escape'){
      onCloseMovie();
    }
 }
  document.addEventListener("keydown",callback)
  return function(){
    document.removeEventListener('keydown',callback)
  }
},[onCloseMovie])

  return (
    <div className='details'>
      {isLoading ? <Loader /> :
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
              {!isWatched ? <>
                <StarRating maxRating={10} size={20} onSetRating={setUserRatimg} />

                 {userRating > 0 && <button className='btn-add' onClick={handleAdd}>+Add to list</button>}</>
                   : <p>You rate with movie {userWatchedRating}<span>⭐</span></p>
               }

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
