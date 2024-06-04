import React from 'react'

const NumMovies = ({num}) => {
  return (
    <div>
        <p className="num-results">Found <strong>{num}</strong> results</p>
    </div>
  )
}

export default NumMovies
