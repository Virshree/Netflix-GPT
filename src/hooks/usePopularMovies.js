import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const usePopularMovies=()=>{
    const disptach=useDispatch();

  useEffect(()=>{
    fetchPopularMovies();
  },[])
  const fetchPopularMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/popular?&page=1",API_OPTIONS);
    const json=await data.json();
    // console.log(json.results);
    disptach(addPopularMovies(json.results));
  }

}

export default usePopularMovies;