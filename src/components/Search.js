import React, { useEffect, useRef } from 'react'

const Search = ({query,setquery}) => {

   const inputEl=useRef();
   useEffect(function(){
     inputEl.current.focus()
   },[])
   
    return (
        <div>
            <input type="text" className="search" placeholder="Search here..."  value={query} onChange={(e) => setquery(e.target.value)} ref={inputEl} />
        </div>
    )
}

export default Search
