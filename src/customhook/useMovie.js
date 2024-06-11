import { useState,useEffect } from "react";
const KEY = "a97ded1a"
export function useMovie(query,callback){

    const [movie, setmovie] = useState([])
    const [isLoader,setisLoader]=useState(false)
    const [error,setError]=useState('')


    useEffect(function () {
  
        callback?.();

        const controller=new AbortController();
        async function fetchData() {
          try{
            setError('')
          setisLoader(true)
          const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,{signal:controller.signal})
          
          if(!res.ok) throw new Error('Some thing Wrong Happend')
    
          const data = await res.json();
    
          if(data.Response === 'False') throw new Error('Movie Not Found')
    
          setmovie(data.Search);
          setError('')
    } catch(err){
      console.error(err.message)
      if(err.name !== 'AbortError')
        {
          setError(err.message)
        }
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
    
        return function(){
          controller.abort();
        }
      },[query])
    return {movie,isLoader,error}
}