import React from 'react'
import Header from './Header'
import useFetchMoviesDetails from '../hooks/useFetchMoviesDetails'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';


const Browse = () => {

  useFetchMoviesDetails();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondContainer/>
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
  )
}

export default Browse