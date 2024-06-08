import React, { useState } from 'react';
import Star from './Star';
import PropTypes from 'prop-types';



//FULL STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#000"
  stroke="#000"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>



const starContainerStyle={
    display:'flex',
}

const textStyle={
    lineHeight:'1',
    margin:'0',
    
}
 


const StarRating = ({maxRating = 5,color='#fcc419',size=48,message=[],onSetRating}) => {

    const containerStyle={
        display:'flex',
        alignItems:'center',
        gap:'16px',
        color,
        fontSize:`${size/1.5}px`,
    }
    const [rating,setRating]=useState(0);
    const [tempRating,setTempRating]=useState(0)

  function handleRating(rating) {
       setRating(rating)
       onSetRating(rating)
  } 
  return (
    <div style={containerStyle}>
        <div style={starContainerStyle}>
            {Array.from({length:maxRating},(_,i)=><Star onHoverOut={()=>setTempRating(0)} onHoverIn={()=>setTempRating(i + 1)} key={i} onRate={()=>handleRating(i+1)} full={tempRating ? tempRating>=i+1 :  rating >= i+1} color={color} size={size}/>)}
        </div>
        <p style={textStyle}>{message.length === maxRating ? message[tempRating ? tempRating -1 : rating - 1] : tempRating || rating || ''}</p>
    </div>
  )
}

StarRating.propTypes = {
  maxRating:PropTypes.number.isRequired,
  color:PropTypes.string,
  size:PropTypes.number,
  message:PropTypes.array,
};

export default StarRating
