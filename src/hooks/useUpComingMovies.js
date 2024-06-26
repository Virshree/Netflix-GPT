import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useUpComingMovies=()=>{
    const disptach=useDispatch();

  useEffect(()=>{
    fetchUpComingMovies();
  },[])
  const fetchUpComingMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?&page=1",API_OPTIONS);
    const json=await data.json();
    console.log(json.results);
    disptach(addUpcomingMovies(json.results));
  }

}

export default useUpComingMovies;