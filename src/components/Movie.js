import React from 'react'

const Movie = ({avgimdbRating,avgruntime,avguserRating,watched}) => {
  return (
    <div>
      <div className='summary'>
            <h2>Movies You Watched</h2>
              <div>
                <p>
                    <span>#️⃣</span>
                    <span>{watched?.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgimdbRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avguserRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>
                    ⏳
                    </span>
                    <span>{avgruntime.toFixed(2)}</span>
                </p>
              </div>
          </div>
    </div>
  )
}

export default Movie
