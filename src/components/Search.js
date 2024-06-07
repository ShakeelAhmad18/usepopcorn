import React from 'react'
import { useState } from 'react'
const Search = () => {
    const [query,setquery]=useState('')

    return (
        <div>
            <input type="text" className="search" placeholder="Search here..."  value={query} onChange={(e) => setquery(e.target.value)} />
        </div>
    )
}

export default Search
