import React from 'react'
import {MOVIE_CDN_URL} from '../utils/constants';
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-52 pr-4'>
        <img 
        src={MOVIE_CDN_URL+ posterPath}  
        alt="movie"
        className='p-2 m-2 ' />
    </div>
  )
}

export default MovieCard