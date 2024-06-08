import React from 'react'

const NumMovies = ({num}) => {
  return (
    <div>
        <p className="num-results" style={{paddingLeft:'200px'}}>Found <strong>{num}</strong> results</p>
    </div>
  )
}

export default NumMovies
