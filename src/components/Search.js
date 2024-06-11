import React, { useEffect, useRef } from 'react'

const Search = ({query,setquery}) => {

   const inputEl=useRef();
   useEffect(function(){
   
    function callback(e){

        if(document.activeElement === inputEl.current) return;


         if(e.code === 'Enter'){
            inputEl.current.focus()
            setquery('')
         }
    }

    document.addEventListener('keydown',callback)
    return ()=>{
        document.addEventListener('keydown',callback)
    }

   },[setquery])

    return (
        <div>
            <input type="text" className="search" placeholder="Search here..."  value={query} onChange={(e) => setquery(e.target.value)} ref={inputEl} />
        </div>
    )
}

export default Search
