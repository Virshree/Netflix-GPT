import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useTopRatedMovies=()=>{
    const disptach=useDispatch();

  useEffect(()=>{
    fetchTopRatedMovies();
  },[])
  const fetchTopRatedMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?&page=1",API_OPTIONS);
    const json=await data.json();
    // console.log(json.results);
    disptach(addTopRatedMovies(json.results));
  }

}

export default useTopRatedMovies;