import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Tag() {
  const [tag, setTag] = useState('Cat');
  const { gif, fetchData, loader } = useGif(tag);
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  return (
    <div className={`w-[380px] md:w-[470px] bg-[#7077A1] rounded-lg border-2 border-[#F6B17A] flex flex-col items-center justify-around ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1 className='text-3xl italic font-semibold uppercase my-[20px]'>
        Custom {tag} Gif
      </h1>

      {loader ? (
        <Spinner />
      ) : (
        <img src={gif} alt='' className='w-[350px] h-[220px] md:w-[400px] md:h-[320px] bg-cover' />
      )}

      <input
        type='text'
        className={`w-[50%] bg-[#F6B17A] ${isDarkMode ? 'text-black' : 'text-[#424769]'} rounded-md shadow-lg hover:bg-[#f4a462] transition-all duration-200 font-bold py-1 mt-[20px] px-2 text-center`}
        onChange={(eve) => setTag(eve.target.value)}
        value={tag}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            fetchData();
          }
        }}
      />

      <button
        className={`w-[50%] bg-[#F6B17A] ${isDarkMode ? 'text-black' : 'text-[#424769]'} rounded-md shadow-lg hover:bg-[#f4a462] transition-all duration-200 font-bold uppercase py-1 my-[20px]`}
        onClick={() => fetchData()} >
        Generate
      </button>
    </div>
  );
}

export default Tag;
