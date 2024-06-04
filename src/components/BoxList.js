import React, { useState } from 'react'
import MovieList from './MovieList'
import WachedList from './WachedList'
import Movie from './Movie'
const BoxList = ({movie,watched,avgimdbRating,avgruntime,avguserRating}) => {
    const [isOpen2,setisOpen2]=useState(true)

  return (
   
    <main className="main">
        <MovieList movie={movie}/>
       <div className='box'>
            <button className='btn-toggle' onClick={()=>setisOpen2((open)=>!open)}>
                {isOpen2 ? '-' : '+'}
            </button>
            { isOpen2 &&
         <> 
          <Movie avgimdbRating={avgimdbRating}  avgruntime={avgruntime} avguserRating={avguserRating}/>
          <WachedList watched={watched}/>
         </>}
       </div>
    </main>
  )
}

export default BoxList
