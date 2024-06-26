import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  // console.log(movie)

  return (
    <div className="px-6  text-4xl text-white">
      <h1 className="py-2">{title}</h1>
      <div className="flex overflow-x-scroll py-2">
        <div className="flex">
          {movie?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}

        
        </div>
      </div>
    </div>
  );
};

export default MovieList;
