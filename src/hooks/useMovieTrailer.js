import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const [trailerType, setTrailerType] = useState([]);

  const dispatch = useDispatch();

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    setTrailerType(json.results);
    const filterData = trailerType?.filter((video) => video?.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : trailerType[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
  return <div>useMovieTrailer</div>;
};

export default useMovieTrailer;
