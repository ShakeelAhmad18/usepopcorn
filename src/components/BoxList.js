import React, { useState } from 'react'
import MovieList from './MovieList'
import WachedList from './WachedList'
import Movie from './Movie'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import MovieDetails from './MovieDetails'
const BoxList = ({ movie, watched, avgimdbRating, avgruntime, avguserRating, Load, error, selectedID, onSelected,onCloseMovie,onAddWatched,onDeleteWatched}) => {
  const [isOpen2, setisOpen2] = useState(true)

  return (

    <main className="main">
      {/*Load ? <Loader/> :  <MovieList movie={movie}/>*/}

      {
        Load && <Loader />
      }

      {!Load && !error && <MovieList movie={movie} onSelected={onSelected} />}

      {
        error && <ErrorMessage message={error} />
      }
      <div className='box'>
        <button className='btn-toggle' onClick={() => setisOpen2((open) => !open)}>
          {isOpen2 ? '-' : '+'}
        </button>
       {  selectedID ? <MovieDetails selectedID={selectedID} onCloseMovie={onCloseMovie} onAddWatched={onAddWatched} watched={watched} /> :
        <>
          {isOpen2 &&
            <>
              <Movie avgimdbRating={avgimdbRating} avgruntime={avgruntime} avguserRating={avguserRating} />

              <WachedList watched={watched} onDeleteWatched={onDeleteWatched} />

            </>}  </> }
      </div>
    </main>
  )
}

export default BoxList
