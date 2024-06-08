import React from 'react'

const Search = ({query,setquery}) => {

    return (
        <div>
            <input type="text" className="search" placeholder="Search here..."  value={query} onChange={(e) => setquery(e.target.value)} />
        </div>
    )
}

export default Search
