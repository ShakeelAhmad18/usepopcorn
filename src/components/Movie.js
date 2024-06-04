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
                    <span>{avgimdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avguserRating}</span>
                </p>
                <p>
                    <span>
                    ⏳
                    </span>
                    <span>{avgruntime}</span>
                </p>
              </div>
          </div>
    </div>
  )
}

export default Movie
