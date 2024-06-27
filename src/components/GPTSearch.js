import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';
import { BgImg } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
     <div className=" absolute opacity-100 -z-10">
         <img
        src={BgImg}
        alt="bgimg"
      />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GPTSearch;