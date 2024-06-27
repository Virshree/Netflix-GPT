import React from "react";
import Header from "./Header";
import useFetchMoviesDetails from "../hooks/useFetchMoviesDetails";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSerach = useSelector((store) => store.gpt?.showGptSerach);

  useFetchMoviesDetails();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      {showGptSerach ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}

      {/**
       *
       * Main Container
       *  -Video background
       *  -Video title
       * Second Container
       * - Movielist * n
       * - cards * n
       *
       */}
    </div>
  );
};

export default Browse;
