import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
// require('dotenv').config()

function Random() {
    const {gif, fetchData, loader} = useGif();

    return (
    <div className='w-[470px] h-full bg-[#7077A1] rounded-lg border-2 border-[#F6B17A] flex flex-col items-center justify-around'>
        <h1 className=' text-3xl italic font-semibold uppercase my-[20px]'>Random Gif</h1>

        {
            loader ? 
            (<Spinner/>) :
            (<img src={gif} alt="" className='w-[400px] h-[360px]  bg-cover'/>)
        }

        <button className='w-[50%] bg-[#F6B17A] text-[#424769] rounded-md shadow-lg hover:bg-[#f4a462] transition-all duration-200 font-bold uppercase py-1 my-[20px]'
            onClick={()=> fetchData()} >
            Generate
        </button>

    </div>
  )
}

export default Random