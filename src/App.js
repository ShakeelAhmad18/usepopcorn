
import { useEffect, useState } from 'react';
import './App.css';
import BoxList from './components/BoxList';
import Navbar from './components/Navbar';
import NumMovies from './components/NumMovies';
import Logo from './components/Logo';
import Search from './components/Search';
/*const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];*/

const KEY = "a97ded1a"

const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0)

function App() {
  const [query,setquery]=useState('')
  const [movie, setmovie] = useState([])
  const num = movie.length;
  const [watched, setWatched] = useState([])
  const [isLoader,setisLoader]=useState(false)
  const [error,setError]=useState('')
  const [selectedID,setSelectedID]=useState(null)
  //const [search,setSearch]=useState('')

  const avgimdbRating = average(watched.map((movi) => movi.imdbRating))
  const avgruntime = average(watched.map((movi) => movi.runtime))
  const avguserRating = average(watched.map((movi) => movi.userRating))


 function handleSelectedMovie(id){
    setSelectedID((selectedID)=>selectedID === id ? null : id)
 }

 function handleCloseMovie(){
   setSelectedID(null)
 }


  useEffect(function () {
    async function fetchData() {
      try{
        setError('')
      setisLoader(true)
      const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
      
      if(!res.ok) throw new Error('Some thing Wrong Happend')

      const data = await res.json();

      if(data.Response === 'False') throw new Error('Movie Not Found')

      setmovie(data.Search);
} catch(err){
  console.error(err.message)
  setError(err.message)
} finally{
  setisLoader(false)
}
    }

  if(query.length < 3){
    setmovie([])
    setError('')
    return
  }

    fetchData();
  }, [query])


  return (
    <div className="App">
      <Navbar >
        <Logo />
        <Search  query={query} setquery={setquery}/>
        <NumMovies num={num} />
      </Navbar>
      <BoxList movie={movie} watched={watched} avgimdbRating={avgimdbRating} avgruntime={avgruntime} avguserRating={avguserRating} Load={isLoader} error={error} selectedID={selectedID} onSelected={handleSelectedMovie} onCloseMovie={handleCloseMovie}/>
    </div>
  );
}

export default App;
