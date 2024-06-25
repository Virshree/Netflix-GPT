import { useDispatch } from "react-redux";
import { addMoviesData } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useFetchMoviesDetails=()=>{
    const disptach=useDispatch();

  useEffect(()=>{
    fetchMoviesDetails();
  },[])
  const fetchMoviesDetails=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1",API_OPTIONS);
    const json=await data.json();
    console.log(json.results);
    disptach(addMoviesData(json.results));
  }

}

export default useFetchMoviesDetails;