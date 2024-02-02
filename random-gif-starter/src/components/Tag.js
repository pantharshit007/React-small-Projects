import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Tag() {
  const [tag, setTag] = useState('Cat');

  const { gif, fetchData, loader } = useGif(tag);

  function keyHandler(event) {
    if (event.key === 'Enter') {
      fetchData();
    }
  }

  return (
    <div className='w-[470px] bg-[#7077A1] rounded-lg border-2 border-[#F6B17A] flex flex-col items-center justify-around'>
      <h1 className='text-3xl italic font-semibold uppercase my-[20px]'>
        Custom {tag} Gif
      </h1>

      {loader ? (
        <Spinner />
      ) : (
        <img src={gif} alt='' className='w-[400px] h-[320px] bg-cover' />
      )}

      <input
        type='text'
        className='w-[50%] bg-[#F6B17A] text-[#424769] rounded-md shadow-lg hover:bg-[#f4a462] transition-all duration-200 font-bold py-1 mt-[20px] px-2 text-center'
        onChange={(eve) => setTag(eve.target.value)}
        value={tag}
        onKeyDown={keyHandler} 
      />

      <button
        className='w-[50%] bg-[#F6B17A] text-[#424769] rounded-md shadow-lg hover:bg-[#f4a462] transition-all duration-200 font-bold uppercase py-1 my-[20px]'
        onClick={() => fetchData()} >
        Generate
      </button>

    </div>
  );
}

export default Tag;
