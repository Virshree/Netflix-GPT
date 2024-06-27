import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey=useSelector(store=>store.config.lang)
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className=' w-1/2 m-5 bg-black  grid grid-cols-12 '>
        <input type="text" className='m-4 p-4  col-span-9 font-bold text-xl' 
        placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-4 mx-4 col-span-3 m-4 bg-red-700
            font-bold text-xl text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
       
    </div>
  )
}

export default GptSearchBar