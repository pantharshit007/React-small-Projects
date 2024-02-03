import React from 'react';
import Random from './components/Random.js';
import Tag from './components/Tag.js';

export default function App() {


  return( 
    <div className=" w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      
      <h1 className='bg-white rounded-md w-11/12 text-center font-bold text-2xl uppercase my-[20px] mx-auto py-2'> 
        Random GIFS</h1>

      <div className="flex flex-col md:flex-row w-full items-center mt-[15px] justify-center gap-[2rem] md:gap-[5rem] mb-5">
        <div className=''>
          <Random/>
        </div>
        <div>
          <Tag/>
        </div>
      </div>
    </div>
  )
}
