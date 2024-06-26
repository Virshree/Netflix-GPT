import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondContainer = () => {
  const movies=useSelector(store=>store.movie)


  return (
    <div className='bg-black'>
      <div className='-mt-64  pl-12 relative  z-20'>
      <MovieList title={"Now Playing"} movie={movies.playingMoviesData}/>
      <MovieList title={"Popular" }movie={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movie={movies.topRatedMovies}/> 
     <MovieList title={"Upcoming Movies"} movie={movies.upcomingmovies}/>
    
      </div>
     

    </div>
  )
}

export default SecondContainer